import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStudentsInCourse, gradeMultipleStudents } from "../services/facultyService";
import StudentsUI from "./StudentsUi";

function Students() {
  const { courseId } = useParams();
  const [students, setStudents] = useState([]);
  const [, setError] = useState(null);
  const [grades, setGrades] = useState([{ sid: "", grade: "" }]);

  useEffect(() => {
    async function fetchStudents() {
      try {
        const response = await getStudentsInCourse(courseId);
        setStudents(response);
      } catch (error) {
        alert("Error fetching students. Please try again.");
      }
    }
    fetchStudents();
  }, [courseId]);

  const handleInputChange = (index, field, value) => {
    const updatedGrades = [...grades];
    updatedGrades[index][field] = value;
    setGrades(updatedGrades);
  };

  const addGradeRow = () => {
    setGrades([...grades, { sid: "", grade: "" }]);
  };

  const submitGrades = async (e) => {
    e.preventDefault();
    try {
      const formattedGrades = grades.map((entry) => ({
        studentId: parseInt(entry.sid, 10),
        grade: entry.grade.trim(),
      }));

      await gradeMultipleStudents(courseId, formattedGrades);
      alert("Grades submitted successfully!");
    } catch (err) {
      alert(err.message || "Error submitting grades. Please try again.");
    }
  };

  return (
    <StudentsUI
      courseId={courseId}
      students={students}
      grades={grades}
      handleInputChange={handleInputChange}
      addGradeRow={addGradeRow}
      submitGrades={submitGrades}
    />
  );
}

export default Students;
