/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect, useContext } from "react";
import quizImage from "../images/quiz.svg";
import pollImage from "../images/poll.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import GeneralService from "../Services/AuthService";
import StudentService from "../Services/StudentService";
import BreadCrum from "./BreadCrum";

const Course = (props) => {
  const id = props.match.params.courseId;
  let crs = null;
  let course = props.location.state ? props.location.state.course : crs;
  const [quizzes, setQuizzes] = useState([]);
  const [polls, setPolls] = useState([]);

  const { user } = useContext(AuthContext);

  let names = course.creator.map((instructor) => instructor.name).join();

  useEffect(() => {
    GeneralService.ShowQuizzesAndPolls(id).then((data) => {
      // console.log(data);
      setQuizzes(data.quizzes);
      setPolls(data.polls);
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
    <>
      <BreadCrum path={["Course", `${course.name}`]} />
      <div className="container" style={{ background: "#eee" }}>
        <div className="pll">
          <h1>{course.name}</h1>
          {user.role === "student" ? (
            <Link onClick={leaveRoom}>
              <button className="btn btn-danger">Leave the Room</button>
            </Link>
          ) : null}
        </div>
        {user.role === "student" ? (
          <h4>Faculty: {names}</h4>
        ) : (
          <h4>You are the Admin of this Course</h4>
        )}
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
                    View All Students
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
            <div className="d-flex flex-row justify-content-between">
              <h2>Quizzes</h2>
              {user.role === "teacher" ? (
                <Link to={`/createQuiz/${course._id}`}>
                  <button className="btn btn-primary d-flex justify-content-end align-items-center">
                    Add new Quiz <i class="fa fa-plus" aria-hidden="true"></i>
                  </button>
                </Link>
              ) : null}
            </div>
            <hr />
            {/* Horizontal Card One */}
            {quizzes.length > 0 ? (
              quizzes.map((quiz) => (
                <div className="card border-0 mb-4 mt-4">
                  <div className="d-flex rounded">
                    <img src={quizImage} className="horizontal-card-bg-img" />
                    <div className="flex-fill">
                      <div className="card-body">
                        <div className="font-weight-bold mt-3">
                          {quiz.title}
                        </div>
                        <div className="mb-3">{quiz.description}</div>
                        <div className="mb-3">Timing: 4 - 4:15</div>
                      </div>
                    </div>
                    <div
                      className="horizontal-card-btn-container d-flex
                  flex-col justify-content-around align-items-center"
                    >
                      {user.role === "student" ? (
                        <Link to={`/quiz/${quiz._id}`}>
                          <button className="btn btn-warning">Attempt</button>
                        </Link>
                      ) : (
                        <>
                          <Link
                            to={{
                              pathname: `/editQuiz/${quiz._id}`,
                              state: { quiz },
                            }}
                          >
                            <button className="btn btn-warning">
                              Edit <i class="fas fa-edit"></i>
                            </button>
                          </Link>
                          <Link>
                            <button className="btn btn-warning">
                              View results
                            </button>
                          </Link>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h3>No Quizzes assigned yet</h3>
            )}
            {/* Horizontal Card One Ends*/}
            <br />
            <div className="d-flex flex-row justify-content-between">
              <h2>Polls</h2>
              {user.role === "teacher" ? (
                <Link to={`/createPoll/${course._id}`}>
                  <button className="btn btn-primary d-flex justify-content-end align-items-center">
                    Add new Poll <i class="fa fa-plus" aria-hidden="true"></i>
                  </button>
                </Link>
              ) : null}
            </div>
            <hr />
            {polls.length > 0 ? (
              polls.map((poll) => (
                <div className="card border-0 mb-4">
                  <div className="d-flex">
                    <img src={pollImage} className="horizontal-card-bg-img" />
                    <div className="flex-fill">
                      <div className="card-body">
                        <div className="font-weight-bold mt-3">
                          {poll.question}
                        </div>
                        <div className="mb-3">{poll.title}</div>
                        <div className="mb-3">Timing: 3 - 3:45pm</div>
                      </div>
                    </div>
                    <div
                      className="horizontal-card-btn-container d-flex
                  flex-col justify-content-around align-items-center"
                    >
                      {user.role === "student" ? (
                        <Link to={`/poll/${poll._id}}`}>
                          <button className="btn btn-warning">Give Poll</button>
                        </Link>
                      ) : (
                        <>
                          <Link
                            to={{
                              pathname: `/editPoll/${poll._id}`,
                            }}
                          >
                            <button className="btn btn-warning">
                              Edit <i class="fas fa-edit"></i>
                            </button>
                          </Link>
                          <Link>
                            <button className="btn btn-warning">
                              View results
                            </button>
                          </Link>
                        </>
                      )}
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
    </>
  );
};

export default Course;
