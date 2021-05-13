/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import "../css/createQuiz.css";

const CreateQuiz = () => {
  return (
    <div style={{ textAlign: "center", background: "#ced4da" }}>
      <div className="page-border border-left" />
      <div className="page-border border-right" />
      <div className="page-border border-top" />
      <div className="page-border border-bottom" />
      <input type="hidden" id="myid" defaultValue="hi" />
      <form id="form" name="form">
        <div
          className="container"
          id="dynamicInput"
          style={{ marginBottom: "16px" }}
        >
          <h3 style={{ paddingTop: "0px", marginBottom: "20px" }}>
            Quiz Maker
          </h3>
          <div className="wrapper">
            <input
              className="input"
              id="title"
              name="title"
              placeholder="Untitled Quiz*"
              type="text"
              required
            />
            <span className="underline" />
          </div>
          <div className="wrapper">
            <input
              className="input"
              id="desc"
              placeholder="Description (optional)"
              type="text"
              style={{ fontSize: "12px" }}
            />
            <span className="underline" />
          </div>
          <div className="card" name="qset1">
            <div className="card-body">
              <div className="wrapper">
                <input
                  className="input"
                  id="q1"
                  placeholder="Untitled Question*"
                  type="text"
                  style={{ fontSize: "18px" }}
                  required
                />
                <span className="underline" />
              </div>
              <label className="input-container" style={{ width: "100%" }}>
                <i className="fa fa-circle-o icon" />
                <input
                  type="text"
                  id="q1opt1"
                  className="form-control"
                  placeholder="Option 1"
                  required
                />
              </label>
              <label className="input-container" style={{ width: "100%" }}>
                <i className="fa fa-circle-o icon" />
                <input
                  type="text"
                  id="q1opt2"
                  className="form-control"
                  placeholder="Option 2"
                  required
                />
              </label>
              <label className="input-container" style={{ width: "100%" }}>
                <i className="fa fa-circle-o icon" />
                <input
                  type="text"
                  id="q1opt3"
                  className="form-control"
                  placeholder="Option 3"
                  required
                />
              </label>
              <label className="input-container" style={{ width: "100%" }}>
                <i className="fa fa-circle-o icon" />
                <input
                  type="text"
                  id="q1opt4"
                  className="form-control"
                  placeholder="Option 4"
                  required
                />
              </label>
              <label className="input-container" style={{ width: "100%" }}>
                <i className="fa fa-check-circle icon" />
                <input
                  type="text"
                  id="q1ans"
                  className="form-control"
                  placeholder="Answer"
                  required
                />
              </label>
            </div>
            <div className="card-footer" align="right">
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Add question"
                id="addCard"
                onclick="return addInput();"
              >
                <i className="fa fa-plus-circle fa-2x" />
              </a>
              <span
                data-toggle="tooltip"
                data-placement="bottom"
                title="Delete question"
              >
                <i className="fa fa-trash fa-2x" />
              </span>
            </div>
          </div>
        </div>
        <button
          name="submit_btn"
          value="primary"
          type="submit"
          className="btn-get-started"
        >
          DONE
        </button>
      </form>
    </div>
  );
};

export default CreateQuiz;
