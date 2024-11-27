import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { gradeStudent } from "../services/facultyService";
import GradeStudentUI from "./GradeStudentsui";

function GradeStudent() {
  const { courseId, studentId } = useParams();
  const [grade, setGrade] = useState("");

  useEffect(() => {
    setGrade(""); // Initialize grade or reset on change
  }, [studentId]);

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
    <GradeStudentUI
      studentId={studentId}
      courseId={courseId}
      grade={grade}
      setGrade={setGrade}
      handleGradeSubmit={handleGradeSubmit}
    />
  );
}

export default GradeStudent;
