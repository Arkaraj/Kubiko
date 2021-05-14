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

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <PublicRoute path="/login" exact component={Login} />
          <PublicRoute path="/register" exact component={Register} />
          <StudentRoutes path="/student" exact component={Student} />
          <SenseiRoutes path="/teacher" exact component={Teacher} />
          <SenseiRoutes
            path="/createQuiz/:courseId"
            exact
            component={CreateQuiz}
          />
          <SenseiRoutes path="/editQuiz/:quizId" exact component={EditQuiz} />
          <StudentRoutes path="/quiz/:quizId" exact component={Quiz} />
          <StudentRoutes path="/polls" exact component={Polls} />
        </Switch>
        <Route path="/course/:courseId" exact component={Course} />
        <Route
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
