/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import quizImage from "../images/quiz.png";

const Student = () => {
  return (
    <div class="content">
      <div class="parallel">
        <h2>Welcome Arkaraj, Your Courses are:</h2>
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
        <div class="card card-1">
          <div class="cardContent">
            <img
              class="quizImage"
              src={quizImage}
              alt="Kubiko"
              width="128"
              height="128"
            />
            <h1 class="cardHeading">Software Engineering</h1>
            <p>
              Software engineering is a branch of computer science which
              includes the development and building of computer systems software
              and applications software. Computer systems software is composed
              of programs that include computing utilities and operations
              systems.
            </p>
            <div class="cardbottom">
              <p class="code">Code: cUxHxD</p>
              <button class="enterBtn">View →</button>
            </div>
          </div>
        </div>
        <div class="card card-1">
          <div class="cardContent">
            <img
              class="quizImage"
              src={quizImage}
              alt="Kubiko"
              width="128"
              height="128"
            />
            <h1 class="cardHeading">Operating Systems</h1>
            <p>
              Software engineering is a branch of computer science which
              includes the development and building of computer systems software
              and applications software. Computer systems software is composed
              of programs that include computing utilities and operations
              systems.
            </p>
            <div class="cardbottom">
              <p class="code">Code: pX_yqY</p>
              <button class="enterBtn">View →</button>
            </div>
          </div>
        </div>
        <div class="card card-1">
          <div class="cardContent">
            <img
              class="quizImage"
              src={quizImage}
              alt="Kubiko"
              width="128"
              height="128"
            />
            <h1 class="cardHeading">DBMS</h1>
            <p>
              Software engineering is a branch of computer science which
              includes the development and building of computer systems software
              and applications software. Computer systems software is composed
              of programs that include computing utilities and operations
              systems.
            </p>
            <div class="cardbottom">
              <p class="code">Code: YpB6J_</p>
              <button class="enterBtn">View →</button>
            </div>
          </div>
        </div>
        <div class="card card-1">
          <div class="cardContent">
            <img
              class="quizImage"
              src={quizImage}
              alt="Kubiko"
              width="128"
              height="128"
            />
            <h1 class="cardHeading">Course Name</h1>
            <p>
              Software engineering is a branch of computer science which
              includes the development and building of computer systems software
              and applications software. Computer systems software is composed
              of programs that include computing utilities and operations
              systems.
            </p>
            <div class="cardbottom">
              <p class="code">Code: xYz7Fe</p>
              <button class="enterBtn">View →</button>
            </div>
          </div>
        </div>
        <div class="card card-1">
          <div class="cardContent">
            <img
              class="quizImage"
              src={quizImage}
              alt="Kubiko"
              width="128"
              height="128"
            />
            <h1 class="cardHeading">Course Name</h1>
            <p>This Course is cool.</p>
            <div class="cardbottom">
              <p class="code">Code: cUxHxD</p>
              <button class="enterBtn">View →</button>
            </div>
          </div>
        </div>
        <div class="card card-1">
          <div class="cardContent">
            <img
              class="quizImage"
              src={quizImage}
              alt="Kubiko"
              width="128"
              height="128"
            />
            <h1 class="cardHeading">Course Name</h1>
            <p>This Course is cool.</p>
            <div class="cardbottom">
              <p class="code">Code: cUxHxD</p>
              <button class="enterBtn">View →</button>
            </div>
          </div>
        </div>
        <div class="card card-1">
          <div class="cardContent">
            <img
              class="quizImage"
              src={quizImage}
              alt="Kubiko"
              width="128"
              height="128"
            />
            <h1 class="cardHeading">Software Engineering</h1>
            <p>
              Software engineering is a branch of computer science which
              includes the development and building of computer systems software
              and applications software. Computer systems software is composed
              of programs that include computing utilities and operations
              systems.
            </p>
            <div class="cardbottom">
              <p class="code">Code: cUxHxD</p>
              <button class="enterBtn">View →</button>
            </div>
          </div>
        </div>
        <div class="card card-1">
          <div class="cardContent">
            <img
              class="quizImage"
              src={quizImage}
              alt="Kubiko"
              width="128"
              height="128"
            />
            <h1 class="cardHeading">Course Name</h1>
            <p>This Course is cool.</p>
            <div class="cardbottom">
              <p class="code">Code: cUxHxD</p>
              <button class="enterBtn">View →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
