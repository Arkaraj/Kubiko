/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, createRef, useState, useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";
import CourseCard from "./CourseCard";
import TeacherService from "../Services/SenseiService";

const Teacher = () => {
  const { user } = useContext(AuthContext);

  const [courses, setCourses] = useState([]);
  const [room, setRoom] = useState({ name: "", description: "" });

  const [msg, setMsg] = useState("");

  const close = createRef();

  useEffect(() => {
    TeacherService.getAllCreatedCourse().then((data) => {
      console.log(data);
      setCourses(data.course);
    });
  }, []);

  const onChange = (e) => {
    setRoom({ ...room, [e.target.name]: e.target.value });
  };

  const createCourse = (e) => {
    e.preventDefault();

    TeacherService.createRoom(room).then((data) => {
      setCourses([...courses, data.course]);
      setMsg(data.msg);
      // close.current.focus();
    });
    // alert(JSON.stringify(room, null, 2));
  };

  return (
    <div className="content">
      <div className="parallel">
        <h2>Welcom {user.name}, Your Created Courses are:</h2>
        <a href="#create">
          <button className="joinBtn">Create Course +</button>
        </a>
      </div>
      <div id="create">
        <form className="joinForm" onSubmit={createCourse}>
          <a href="#" className="close" ref={close}>
            ×
          </a>
          <h1>Enter the Course Name</h1>
          <input
            type="text"
            name="name"
            value={room.name}
            onChange={onChange}
            className="eventCode"
            placeholder="Enter the Course Name"
          />
          <h1>Enter the Course Description</h1>
          <input
            type="text"
            name="description"
            value={room.description}
            onChange={onChange}
            className="eventCode"
            placeholder="Enter the Course Description"
          />
          <button className="joinBtn">Create</button>
          <div className="active-actions" />
          <h3>
            {/* Your Course Room is Created!, Course Code: fDcYcT */}
            {msg}
          </h3>
        </form>
      </div>

      <div class="course">
        {courses.length > 0 ? (
          courses.map((course) => (
            <CourseCard
              key={Math.random()}
              course={course}
              setCourses={setCourses}
              teacher={true}
            />
          ))
        ) : (
          <h2>You have not Created any courses yet!</h2>
        )}
      </div>
    </div>
  );
};

export default Teacher;
