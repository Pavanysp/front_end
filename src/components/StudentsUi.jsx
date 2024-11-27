import React from "react";
import { Link } from "react-router-dom";

const StudentsUI = ({ 
  courseId, 
  students, 
  grades, 
  handleInputChange, 
  addGradeRow, 
  submitGrades 
}) => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Students in Course {courseId}</h2>
      <p>Click on a student ID to grade them individually.</p>

      <ul className="list-group mb-4">
        {students.map((student) => (
          <li key={student.sid} className="list-group-item d-flex justify-content-between align-items-center">
            <Link to={`/courses/${courseId}/grade/${student.sid}`}>
              {student.name} (ID: {student.sid})
            </Link>
          </li>
        ))}
      </ul>

      <form onSubmit={submitGrades}>
        <h3>Grade Multiple Students</h3>
        {grades.map((entry, index) => (
          <div key={index} className="input-group mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Student ID"
              value={entry.sid || ""}
              onChange={(e) => handleInputChange(index, "sid", e.target.value)}
            />
            <input
              type="text"
              className="form-control"
              placeholder="Grade"
              value={entry.grade || ""}
              onChange={(e) => handleInputChange(index, "grade", e.target.value)}
            />
          </div>
        ))}
        <button type="button" className="btn btn-secondary mb-3" onClick={addGradeRow}>
          Add Student
        </button>
        <button type="submit" className="btn btn-primary">
          Grade Students
        </button>
      </form>
    </div>
  );
};

export default StudentsUI;
