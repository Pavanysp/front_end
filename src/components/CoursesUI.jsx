import React from "react";

const CoursesUI = ({ courses, handleViewStudents }) => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Courses Taught</h2>
      <ul className="list-group">
        {courses.map((course) => (
          <li
            key={course.cid}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {course.name}
            <button
              className="btn btn-primary btn-sm"
              onClick={() => handleViewStudents(course.cid)}
            >
              View Students
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoursesUI;
