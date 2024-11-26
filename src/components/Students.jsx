import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getStudentsInCourse, gradeMultipleStudents } from "../services/facultyService";

function Students() {
  const { courseId } = useParams();
  const [students, setStudents] = useState([]);
  const [grades, setGrades] = useState([{ sid: "", grade: "" }]); // Default single row for grading multiple students

  // Fetch students for a specific course
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

  // Handle input changes for grading multiple students
  const handleInputChange = (index, field, value) => {
    const updatedGrades = [...grades];
    updatedGrades[index][field] = value;
    setGrades(updatedGrades);
  };

  // Add a new row for grading another student
  const addGradeRow = () => {
    setGrades([...grades, { sid: "", grade: "" }]);
  };

  // Submit grades for multiple students
  const submitGrades = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      // Format grades into the required JSON structure
      const formattedGrades = grades.map((entry) => ({
        studentId: parseInt(entry.sid, 10), // Ensure studentId is an integer
        grade: entry.grade.trim(), // Grade remains a string
      }));
  
      // Log the formattedGrades to debug
      console.log("Formatted Grades JSON:", JSON.stringify(formattedGrades));
  
      // Call the service function to grade multiple students
      await gradeMultipleStudents(courseId, formattedGrades);
      alert("Grades submitted successfully!");
    } catch (error) {
      console.error("Error submitting grades:", error);
      alert("Error submitting grades. Please try again.");
    }
  };
  

  return (
    <div className="students-container">
      <h2>Students in Course {courseId}</h2>
      <p>Click on a student ID to grade them individually.</p>

      {/* List of Students */}
      <ul>
        {students.map((student) => (
          <li key={student.sid}>
            <Link to={`/courses/${courseId}/grade/${student.sid}`}>
              {student.name} (ID: {student.sid})
            </Link>
          </li>
        ))}
      </ul>

      {/* Grade Multiple Students */}
      <form onSubmit={submitGrades}>
        <h3>Grade Multiple Students</h3>
        {grades.map((entry, index) => (
  <div key={index}>
    <input
      type="number"
      placeholder="Student ID"
      value={entry.sid || ""}
      onChange={(e) => handleInputChange(index, "sid", e.target.value)}
    />
    <input
      type="text"
      placeholder="Grade"
      value={entry.grade || ""}
      onChange={(e) => handleInputChange(index, "grade", e.target.value)}
    />
  </div>
))}
        <button type="button" onClick={addGradeRow}>
          Add Student
        </button>
        <button type="submit">Grade Students</button>
      </form>
    </div>
  );
}

export default Students;
