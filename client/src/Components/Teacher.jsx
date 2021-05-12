/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import quizImage from "../images/quiz.png";

const Teacher = () => {
  return (
    <div className="content">
      <div className="parallel">
        <h2>Your Created Courses are:</h2>
        <a href="#create">
          <button className="joinBtn">Create Course +</button>
        </a>
      </div>
      <div id="create">
        <form className="joinForm">
          <a href="#" className="close">
            ×
          </a>
          <h1>Enter the Course Name</h1>
          <input
            type="text"
            className="eventCode"
            placeholder="Enter the Course Name"
          />
          <h1>Enter the Course Description</h1>
          <input
            type="text"
            className="eventCode"
            placeholder="Enter the Course Description"
          />
          <button className="joinBtn">Create</button>
          <div className="active-actions" />
          <h3>
            Your Course Room is Created!, Course Code:
            <span className="Createcode">fDcYcT</span>
          </h3>
        </form>
      </div>
      <div className="course">
        <div className="card card-1">
          <div className="cardContent">
            <img
              className="quizImage"
              src={quizImage}
              alt="Kubiko"
              width={128}
              height={128}
            />
            <h1 className="cardHeading">Software Engineering</h1>
            <p>
              Software engineering is a branch of computer science which
              includes the development and building of computer systems software
              and applications software. Computer systems software is composed
              of programs that include computing utilities and operations
              systems.
            </p>
            <div className="cardbottom">
              <p className="code">Code: cUxHxD</p>
              <button className="enterBtn">View →</button>
            </div>
          </div>
        </div>
        <div className="card card-1">
          <div className="cardContent">
            <img
              className="quizImage"
              src={quizImage}
              alt="Kubiko"
              width={128}
              height={128}
            />
            <h1 className="cardHeading">Artificial Intelligence</h1>
            <p>
              Artificial intelligence (AI) refers to the simulation of human
              intelligence in machines that are programmed to think like humans
              and mimic their actions. The term may also be applied to any
              machine that exhibits traits associated with a human mind such as
              learning and problem-solving.
            </p>
            <div className="cardbottom">
              <p className="code">Code: g6Ty_1</p>
              <button className="enterBtn">View →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
