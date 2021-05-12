import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Polls from "./Components/Polls";
import Register from "./Components/Register";
import Student from "./Components/Student";
import Teacher from "./Components/Teacher";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/polls" exact component={Polls} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/student" exact component={Student} />
          <Route path="/teacher" exact component={Teacher} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
