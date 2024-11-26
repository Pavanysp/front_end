import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCourses } from "../services/facultyService";

function Courses() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCourses() {
      try {
        const response = await getCourses();
        setCourses(response);
      } catch (error) {
        alert("Error fetching courses. Please try again.");
      }
    }
    fetchCourses();
  }, []);

  const handleViewStudents = (courseId) => {
    navigate(`/courses/${courseId}/students`);
  };

  return (
    <div className="courses-container">
      <h2>Courses Taught</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.cid}>
            {course.name}{" "}
            <button onClick={() => handleViewStudents(course.cid)}>View Students</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Courses;
