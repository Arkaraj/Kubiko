import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TeacherService from "../Services/SenseiService";

const ShowStudents = (props) => {
  const id = props.match.params.courseId;

  const [students, setStudents] = useState([]);

  useEffect(() => {
    TeacherService.GetStudents(id).then((data) => {
      setStudents(data.students);
      console.log(data);
    });
  }, [id]);

  return (
    <div>
      <Link onClick={props.history.goBack}>
        <button>← Go Back</button>
      </Link>
      <h2>Students List</h2>
      <table class="table" style={{ margin: "1rem auto", width: "90%" }}>
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Performance</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, indx) => (
            <tr>
              <th scope="row">{indx + 1}</th>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.role}</td>
              <td>
                <button className="btn btn-primary d-flex justify-content-end">
                  Check Marks
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowStudents;
