import React, { useEffect, useState } from "react";
import SenseiService from "../Services/SenseiService";
import { Link } from "react-router-dom";

const TeacherResults = (props) => {
  let id = props.match.params.quizId;

  const [result, setResult] = useState([]);

  useEffect(() => {
    SenseiService.getQuizResult(id).then((data) => {
      setResult(data);
    });
  }, [id]);

  return (
    <div>
      <Link onClick={props.history.goBack}>
        <button>← Go Back</button>
      </Link>
      <h2>Students:</h2>
      <table
        class="table"
        style={{ margin: "1rem auto", width: "90%", textAlign: "center" }}
      >
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Marks</th>
            <th scope="col">Performance</th>
          </tr>
        </thead>
        <tbody>
          {result.map((res, indx) => (
            <tr>
              <th scope="row">{indx + 1}</th>
              <td>{res.userId.name}</td>
              <td>
                {res.quizMarks}/{res.totalMarks}
              </td>
              <td>
                <Link
                  to={{
                    pathname: `/overall/${res._id}/${id}`,
                    state: { name: res.name },
                  }}
                >
                  <button className="btn btn-primary d-flex justify-content-center mx-auto">
                    Check Quiz
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherResults;
