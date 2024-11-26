import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Courses from "./components/Courses";
import Students from "./components/Students";
import GradeStudent from "./components/GradeStudents";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseId/students" element={<Students />} />
        <Route path="/courses/:courseId/grade/:studentId" element={<GradeStudent />} />
        <Route path="/courses/:courseId/grade" element={<GradeStudent />} />
      </Routes>
    </Router>
  );
}

export default App;
