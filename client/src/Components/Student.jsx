/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";
import CourseCard from "./CourseCard";
import StudentService from "../Services/StudentService";

const Student = () => {
  const { user } = useContext(AuthContext);

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    StudentService.getAllRooms().then((data) => {
      console.log(data);
      setCourses(data.courses);
    });
  }, []);

  return (
    <div class="content">
      <div class="parallel">
        <h2>Welcome {user.name}, Your Courses are:</h2>
        <a href="#join">
          <button class="joinBtn">Join Room +</button>
        </a>
      </div>

      <div id="join">
        <form class="joinForm">
          <a href="#" class="close">
            &times;
          </a>
          <h1>Enter the Course Room code</h1>
          <input
            type="text"
            class="eventCode"
            placeholder="Enter the Course code"
          />
          <button class="joinBtn">Join</button>
          <div class="active-actions"></div>
        </form>
      </div>

      <div class="course">
        {courses.length > 0 ? (
          courses.map((course) => (
            <CourseCard key={Math.random()} course={course} />
          ))
        ) : (
          <h2>No Courses</h2>
        )}
      </div>
    </div>
  );
};

export default Student;
