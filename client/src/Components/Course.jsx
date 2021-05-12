/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import quizImage from "../images/quiz.svg";
import pollImage from "../images/poll.png";

const Course = () => {
  return (
    <div className="container">
      <h1>Software Engineering</h1>
      <h4>Faculty: Piyush</h4>
      <h2>Room Message:</h2>
      <p>Nothing</p>
      <div className="row">
        <div className="move">
          <button className="btn btn-primary d-flex justify-content-end">
            Result/Performance
          </button>
        </div>
        <div className="col-lg-12">
          <h2>Quizzes</h2>
          <hr />
          {/* Horizontal Card One */}
          <div className="card border-0 mb-4 mt-4">
            <div className="d-flex rounded">
              <img src={quizImage} className="horizontal-card-bg-img" />
              <div className="flex-fill">
                <div className="card-body">
                  <div className="font-weight-bold mt-3">Test 1</div>
                  <div className="mb-3">This is just a demo Test</div>
                  <div className="mb-3">Timing: 4 - 4:15</div>
                </div>
              </div>
              <div className="horizontal-card-btn-container d-flex justify-content-center align-items-center">
                <button className="btn btn-warning">Attempt</button>
              </div>
            </div>
          </div>
          {/* Horizontal Card One Ends*/}
          {/* Horizontal Card Two */}
          <div className="card border-0 mb-4">
            <div className="d-flex">
              <img src={quizImage} className="horizontal-card-bg-img" />
              <div className="flex-fill">
                <div className="card-body">
                  <div className="font-weight-bold mt-3">Test 2</div>
                  <div className="mb-3">This is just a demo Test</div>
                </div>
              </div>
              <div className="horizontal-card-btn-container d-flex justify-content-center align-items-center">
                <button className="btn btn-warning">View result →</button>
              </div>
            </div>
          </div>
          {/* Horizontal Card Two Ends*/}
          <h2>Polls</h2>
          <hr />
          {/* Horizontal Card Two */}
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
          {/* Horizontal Card Two Ends*/}
          {/* Horizontal Card Three */}
          <div className="card border-0">
            <div className="d-flex">
              <img src={pollImage} className="horizontal-card-bg-img" />
              <div className="flex-fill">
                <div className="card-body">
                  <div className="font-weight-bold mt-3">Poll 2</div>
                  <div className="mb-3">This is a dummy Poll</div>
                </div>
              </div>
              <div className="horizontal-card-btn-container d-flex justify-content-center align-items-center">
                <button className="btn btn-warning">View Status →</button>
              </div>
            </div>
          </div>
          {/* Horizontal Card Three Ends*/}
        </div>
      </div>
    </div>
  );
};

export default Course;
