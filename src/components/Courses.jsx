import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCourses } from "../services/facultyService";
import CoursesUI from "./CoursesUI";

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

  return <CoursesUI courses={courses} handleViewStudents={handleViewStudents} />;
}

export default Courses;
