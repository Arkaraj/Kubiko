import React, { useEffect, useState } from "react";
import SenseiService from "../Services/SenseiService";

const OverallStudentRes = (props) => {
  let userId = props.match.params.userId;
  let courseId = props.match.params.courseId;
  let { name } = props.location.state;

  const [result, setResult] = useState([]);

  useEffect(() => {
    SenseiService.overallMarks(userId, courseId).then((data) => {
      console.log(data);
      setResult(data);
    });
  }, [userId, courseId]);

  return (
    <div>
      {result ? (
        <pre>
          {name} Total Marks: {result.totalmarks} in {result.totalQuiz} quizzes
        </pre>
      ) : (
        <>
          <h2>Sorry {name} has not give the test yet</h2>
        </>
      )}
    </div>
  );
};

export default OverallStudentRes;
