/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect, useContext } from "react";
import quizImage from "../images/quiz.svg";
import pollImage from "../images/poll.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import GeneralService from "../Services/AuthService";
import StudentService from "../Services/StudentService";

const Course = (props) => {
  const id = props.match.params.courseId;
  let crs = null;
  let course = props.location.state.course ? props.location.state.course : crs;
  const [quizzes, setQuizzes] = useState([]);
  const [polls, setPolls] = useState([]);

  const { user } = useContext(AuthContext);

  let names = course.creator.map((instructor) => instructor.name).join();

  useEffect(() => {
    GeneralService.ShowQuizzes(id).then((data) => {
      console.log(data);
      setQuizzes(data.quizzes);
    });
    if (!course) {
      GeneralService.getCourse(id).then((data) => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        course = data;
      });
    } else {
    }
  }, [course, id]);

  const leaveRoom = () => {
    // eslint-disable-next-line no-restricted-globals
    let bool = confirm(`Are you sure you want to leave ${course.name}`);

    if (bool) {
      StudentService.deleteRoom(id).then((data) => {
        console.log(data);
        props.history.push("/student");
      });
    } else {
    }
  };

  return (
    <div className="container">
      <div className="pll">
        <h1>{course.name}</h1>
        {user.role === "student" ? (
          <Link onClick={leaveRoom}>
            <button className="btn btn-danger">Leave the Room</button>
          </Link>
        ) : null}
      </div>
      <h4>Faculty: {names}</h4>
      {course.message ? (
        <>
          <h2>Room Message:</h2>
          <p>{course.message}</p>
        </>
      ) : (
        <>
          <h2>Room Message:</h2>
          <p>Nothing</p>
        </>
      )}
      <div className="row">
        <div className="move">
          {user.role === "teacher" ? (
            <>
              <Link
                to={{
                  pathname: `./${course._id}/students`,
                  state: { course },
                }}
              >
                <button className="btn btn-primary d-flex justify-content-end">
                  All Students
                </button>
              </Link>
            </>
          ) : (
            <button className="btn btn-primary d-flex justify-content-end">
              <Link to={`/student`} style={{ color: "black" }}>
                Result/Performance
              </Link>
            </button>
          )}
        </div>
        <div className="col-lg-12">
          <h2>Quizzes</h2>
          <hr />
          {/* Horizontal Card One */}
          {quizzes.length > 0 ? (
            quizzes.map((quiz) => (
              <div className="card border-0 mb-4 mt-4">
                <div className="d-flex rounded">
                  <img src={quizImage} className="horizontal-card-bg-img" />
                  <div className="flex-fill">
                    <div className="card-body">
                      <div className="font-weight-bold mt-3">{quiz.title}</div>
                      <div className="mb-3">{quiz.description}</div>
                      <div className="mb-3">Timing: 4 - 4:15</div>
                    </div>
                  </div>
                  <div className="horizontal-card-btn-container d-flex justify-content-center align-items-center">
                    <button className="btn btn-warning">Attempt</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h3>No Quizzes assigned yet</h3>
          )}
          {/* Horizontal Card One Ends*/}
          <br />

          <h2>Polls</h2>
          <hr />
          {polls.length > 0 ? (
            polls.map((poll) => (
              <div className="card border-0 mb-4">
                <div className="d-flex">
                  <img src={pollImage} className="horizontal-card-bg-img" />
                  <div className="flex-fill">
                    <div className="card-body">
                      <div className="font-weight-bold mt-3">
                        How was your Exam?
                      </div>
                      <div className="mb-3">This is a Poll</div>
                      <div className="mb-3">Timing: 3 - 3:45pm</div>
                    </div>
                  </div>
                  <div className="horizontal-card-btn-container d-flex justify-content-center align-items-center">
                    <button className="btn btn-warning">Give Poll</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h3>No Polls Assigned yet</h3>
          )}
          <br />
        </div>
      </div>
    </div>
  );
};

export default Course;
