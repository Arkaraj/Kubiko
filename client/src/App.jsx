import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Course from "./Components/Course";
import CreateQuiz from "./Components/CreateQuiz";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Polls from "./Components/Polls";
import Quiz from "./Components/Quiz";
import Register from "./Components/Register";
import Student from "./Components/Student";
import Teacher from "./Components/Teacher";
import SenseiRoutes from "./Hocs/SenseiRoute";
import StudentRoutes from "./Hocs/StudentRoute";
import PublicRoute from "./Hocs/PublicRoute";
import ShowStudents from "./Components/ShowStudents";
import EditQuiz from "./Components/EditQuiz";
import CreatePoll from "./Components/CreatePoll";
import EditPoll from "./Components/EditPoll";
import Performance from "./Components/Performance";
import PrivateRoute from "./Hocs/PrivateRoute";
import OverallStudentRes from "./Components/OverallStudentRes";
import TeacherResults from "./Components/teacherResults";
import TeacherPollResults from "./Components/TeacherPollResults";
import About from "./Components/About";
import Service from "./Components/Service";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/service" exact component={Service} />
          <PublicRoute path="/login" exact component={Login} />
          <PublicRoute path="/register" exact component={Register} />
          <StudentRoutes path="/student" exact component={Student} />
          <SenseiRoutes path="/teacher" exact component={Teacher} />
          <SenseiRoutes
            path="/createQuiz/:courseId"
            exact
            component={CreateQuiz}
          />
          <SenseiRoutes
            path="/createPoll/:courseId"
            exact
            component={CreatePoll}
          />
          <SenseiRoutes path="/editQuiz/:quizId" exact component={EditQuiz} />
          <SenseiRoutes path="/editPoll/:pollId" exact component={EditPoll} />
          <SenseiRoutes
            path="/result/:quizId"
            exact
            component={TeacherResults}
          />
          <SenseiRoutes
            path="/pollResult/:pollId"
            exact
            component={TeacherPollResults}
          />
          <SenseiRoutes
            path="/overall/:userId/:courseId"
            exact
            component={OverallStudentRes}
          />
          <StudentRoutes path="/quiz/:quizId" exact component={Quiz} />
          <StudentRoutes path="/poll/:pollId" exact component={Polls} />
          <StudentRoutes
            path="/performance/:courseId"
            exact
            component={Performance}
          />
        </Switch>
        <PrivateRoute path="/course/:courseId" exact component={Course} />
        <SenseiRoutes
          path="/course/:courseId/students"
          exact
          component={ShowStudents}
        />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
