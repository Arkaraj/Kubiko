import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SenseiService from "../Services/SenseiService";

const EditQuiz = (props) => {
  const id = props.match.params.quizId;

  const [quiz, setQuiz] = useState(null);

  useEffect(() => {
    SenseiService.GetQuiz(id).then((data) => {
      setQuiz(data.quiz);
    });
  }, [id]);

  //   const { title, description, questions } = quiz;

  return (
    <div style={{ margin: "1rem" }}>
      <Link onClick={props.history.goBack}>
        <button>← Go Back</button>
      </Link>
      {quiz ? (
        <>
          <h2>Quiz: {quiz.title}</h2>
          <h4>Description: {quiz.description}</h4>
          <h4>
            <u>Questions:</u>
          </h4>
          {quiz.questions.map((q) => (
            <div className="overall">
              <div>
                <input type="hidden" id="myid" />
                <div className="container-fluid">
                  <div>
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div style={{ padding: "0 1rem" }}>
                          <div className="d-flex justify-content-between align-items-center">
                            <h3>{q.question}</h3>
                            <mark style={{}}>({q.marks} mark)</mark>
                          </div>
                        </div>
                        <div className="modal-body">
                          <div className="col-xs-3 col-xs-offset-5"></div>
                          <div className="quiz" id="quiz" data-toggle="buttons">
                            <label
                              id="counter"
                              className="element-animation1 btn btn-lg btn-primary btn-block"
                            >
                              <span className="btn-label">
                                <i className="glyphicon glyphicon-chevron-right" />
                              </span>
                              <input
                                type="radio"
                                name="qcounter"
                                defaultValue={1}
                              />
                              {q.option1}
                            </label>
                            <label
                              id="b2counter"
                              className="element-animation2 btn btn-lg btn-primary btn-block"
                            >
                              <span className="btn-label">
                                <i className="glyphicon glyphicon-chevron-right" />
                              </span>
                              <input
                                type="radio"
                                name="qcounter"
                                defaultValue={2}
                              />
                              {q.option2}
                            </label>
                            <label
                              id="b3counter"
                              className="element-animation3 btn btn-lg btn-primary btn-block"
                            >
                              <span className="btn-label">
                                <i className="glyphicon glyphicon-chevron-right" />
                              </span>
                              <input
                                type="radio"
                                name="qcounter"
                                defaultValue={3}
                              />
                              {q.option3}
                            </label>
                            <label
                              id="b4counter"
                              className="element-animation4 btn btn-lg btn-primary btn-block"
                            >
                              <span className="btn-label">
                                <i className="glyphicon glyphicon-chevron-right" />
                              </span>
                              <input
                                type="radio"
                                name="qcounter"
                                defaultValue={4}
                              />
                              {q.option4}
                            </label>
                            Answer: {q.answer}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* counter=counter+1 */}
                    {/* Map ends here */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default EditQuiz;
