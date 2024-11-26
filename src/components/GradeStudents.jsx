import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { gradeStudent } from "../services/facultyService";

function GradeStudent() {
  const { courseId, studentId } = useParams();
  const [grade, setGrade] = useState("");

  useEffect(() => {
    // Initialize grade or reset the state
    setGrade("");
  }, [studentId]);

  // Handle grade submission
  const handleGradeSubmit = async (e) => {
    e.preventDefault();
    try {
      await gradeStudent(courseId, studentId, grade);
      alert("Student graded successfully!");
    } catch (error) {
      alert("Error grading student. Please try again.");
    }
  };

  return (
    <div className="grade-container">
      <h2>Grade Student {studentId} in Course {courseId}</h2>

      <form onSubmit={handleGradeSubmit}>
        <label>Grade:</label>
        <input
          type="text"
          placeholder="Enter grade"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          required
        />
        <button type="submit">Grade Student</button>
      </form>
    </div>
  );
}

export default GradeStudent;
