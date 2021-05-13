import React from "react";
import { Link } from "react-router-dom";
import quizImage from "../images/quiz.png";
import TeacherService from "../Services/SenseiService";

const CourseCard = ({ course, setCourses, teacher }) => {
  const deleteCourse = async (id) => {
    // eslint-disable-next-line no-restricted-globals
    let bool = confirm("Are you sure you want to delete this course?");
    if (bool) {
      TeacherService.deleteRoom(id).then((data) => {
        setCourses((courses) => courses.filter((c) => c._id !== course._id));
      });
    } else {
    }
  };

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
          <Link
            to={{
              pathname: `/course/${course._id}`,
              state: {
                course,
              },
            }}
            style={{ color: "black" }}
          >
            <button class="enterBtn">View →</button>
          </Link>
        </div>
        {teacher ? (
          <>
            <i
              className="trashx fa fa-trash"
              onClick={() => deleteCourse(course._id)}
              aria-hidden="true"
            ></i>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default CourseCard;
