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

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/course" exact component={Course} />
          <StudentRoutes path="/student" exact component={Student} />
          <SenseiRoutes path="/teacher" exact component={Teacher} />
          <SenseiRoutes path="/createQuiz" exact component={CreateQuiz} />
          <StudentRoutes path="/quiz" exact component={Quiz} />
          <StudentRoutes path="/polls" exact component={Polls} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
