import React, { useEffect, useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import StudentService from "../Services/StudentService";

const Performance = (props) => {
  const id = props.match.params.courseId;

  const { user } = useContext(AuthContext);
  const [performance, setPerformance] = useState([]);

  useEffect(() => {
    StudentService.overallMarks(id).then((data) => {
      setPerformance(data);
    });
  }, [id]);

  return (
    <div className="card card-5">
      <h2>hi {user.name}</h2>
      {performance.totalmarks ? (
        <>
          <pre>
            Your Total marks is: {performance.totalmarks.toFixed(2)} in{" "}
            {performance.totalQuiz}
          </pre>
          <pre>
            Total:{" "}
            {((performance.totalmarks / performance.totalQuiz) * 100).toFixed(
              2
            )}
            %
          </pre>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default Performance;
