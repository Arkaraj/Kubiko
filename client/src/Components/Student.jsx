/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";
import CourseCard from "./CourseCard";
import StudentService from "../Services/StudentService";
import BreadCrum from "./BreadCrum";

const Student = () => {
  const { user } = useContext(AuthContext);

  const [courses, setCourses] = useState([]);
  const [code, setCode] = useState({ code: "" });
  const [msg, setMsg] = useState("");

  useEffect(() => {
    StudentService.getAllRooms().then((data) => {
      console.log(data);
      setCourses(data.courses);
    });
  }, []);

  const joinCourse = async (e) => {
    e.preventDefault();
    StudentService.joinRoom(code).then((data) => {
      if (data.msgError) {
        setMsg(data.msg);
      } else {
        console.log(data.course);
        setCourses([...courses, data.course]);
        alert(`Joined ${data.course.name}`);
      }
    });
  };

  return (
    <>
      <BreadCrum path={["course"]} />
      <div class="content">
        <div class="parallel">
          <h2>Welcome {user.name}, Your Courses are:</h2>
          <a href="#join">
            <button class="joinBtn">Join Room +</button>
          </a>
        </div>

        <div id="join">
          <form class="joinForm" onSubmit={joinCourse}>
            <a href="#" class="close">
              &times;
            </a>
            <h1>Enter the Course Room code</h1>
            <input
              type="text"
              name="code"
              value={code.code}
              class="eventCode"
              onChange={(e) =>
                setCode({ ...code, [e.target.name]: e.target.value })
              }
              placeholder="Enter the Course code"
            />
            <button class="joinBtn">Join</button>
            <div class="active-actions">{msg}</div>
          </form>
        </div>

        <div class="course">
          {courses.length > 0 ? (
            courses.map((course) => (
              <CourseCard
                key={Math.random()}
                course={course}
                setCourses={setCourses}
                teacher={false}
              />
            ))
          ) : (
            <h2>You have not joined any courses yet!</h2>
          )}
        </div>
      </div>
    </>
  );
};

export default Student;
