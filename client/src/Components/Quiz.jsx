import React from "react";
// import "../css/quiz.css";

const Quiz = () => {
  return (
    <div className="overall">
      <div>
        <input type="hidden" id="myid" defaultValue="topic._id" />
        <div className="container-fluid">
          <h1>MCQ page</h1>
          <h3>Total marks allocated : topic.marks</h3>
          <div>
            <p>Map starts here</p>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h3>
                    <span className="label label-warning" id="qid" />
                    mcq.question
                  </h3>
                </div>
                <div className="modal-body">
                  <div className="col-xs-3 col-xs-offset-5">
                    <div id="loadbar" style={{ display: "none" }}>
                      <div className="blockG" id="rotateG_01" />
                      <div className="blockG" id="rotateG_02" />
                      <div className="blockG" id="rotateG_03" />
                      <div className="blockG" id="rotateG_04" />
                      <div className="blockG" id="rotateG_05" />
                      <div className="blockG" id="rotateG_06" />
                      <div className="blockG" id="rotateG_07" />
                      <div className="blockG" id="rotateG_08" />
                    </div>
                  </div>
                  <div className="quiz" id="quiz" data-toggle="buttons">
                    <label
                      id="counter"
                      className="element-animation1 btn btn-lg btn-primary btn-block"
                    >
                      <span className="btn-label">
                        <i className="glyphicon glyphicon-chevron-right" />
                      </span>
                      <input type="radio" name="qcounter" defaultValue={1} />
                      mcq.opt1
                    </label>
                    <label
                      id="b2counter"
                      className="element-animation2 btn btn-lg btn-primary btn-block"
                    >
                      <span className="btn-label">
                        <i className="glyphicon glyphicon-chevron-right" />
                      </span>
                      <input type="radio" name="qcounter" defaultValue={2} />
                      mcq.opt2
                    </label>
                    <label
                      id="b3counter"
                      className="element-animation3 btn btn-lg btn-primary btn-block"
                    >
                      <span className="btn-label">
                        <i className="glyphicon glyphicon-chevron-right" />
                      </span>
                      <input type="radio" name="qcounter" defaultValue={3} />
                      mcq.opt3
                    </label>
                    <label
                      id="b4counter"
                      className="element-animation4 btn btn-lg btn-primary btn-block"
                    >
                      <span className="btn-label">
                        <i className="glyphicon glyphicon-chevron-right" />
                      </span>
                      <input type="radio" name="qcounter" defaultValue={4} />
                      mcq.opt4
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {/* counter=counter+1 */}
            {/* Map ends here */}
            <div style={{ textAlign: "center" }}>
              <button className="btn btn-success" type="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
