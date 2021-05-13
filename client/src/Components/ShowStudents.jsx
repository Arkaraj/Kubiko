import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TeacherService from "../Services/SenseiService";

const ShowStudents = (props) => {
  const id = props.match.params.courseId;

  const [students, setStudents] = useState([]);

  useEffect(() => {
    TeacherService.GetStudents(id).then((data) => {
      setStudents(data.students);
    });
  }, [id]);

  return (
    <div>
      <Link onClick={props.history.goBack}>
        <button>Go Back</button>
      </Link>
      <h2>Students List</h2>
      <ul>
        {students.map((student) => (
          <li>{student.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShowStudents;
