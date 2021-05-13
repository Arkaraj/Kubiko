import React from "react";
import { Link } from "react-router-dom";
import quizImage from "../images/quiz.png";

const CourseCard = ({ course }) => {
  return (
    <div class="card card-1">
      <div class="cardContent">
        <img
          class="quizImage"
          src={quizImage}
          alt="Kubiko"
          width="128"
          height="128"
        />
        <h1 class="cardHeading">{course.name}</h1>
        <p>{course.description}</p>
        <div class="cardbottom">
          <p class="code">Code: {course.code}</p>
          <Link to={`/course`} style={{ color: "black" }}>
            <button class="enterBtn">View →</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
