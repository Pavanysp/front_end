const GradeStudentUI = ({ studentId, courseId, grade, setGrade, handleGradeSubmit }) => {
    return (
      <div className="container mt-5">
        <div className="card p-4 shadow-sm">
          <h2 className="text-center mb-4">Grade Student</h2>
          <h5>
            <strong>Course ID:</strong> {courseId}
          </h5>
          <h5>
            <strong>Student ID:</strong> {studentId}
          </h5>
          <form onSubmit={handleGradeSubmit}>
            <div className="mb-3">
              <label htmlFor="gradeInput" className="form-label">
                Grade:
              </label>
              <input
                type="text"
                id="gradeInput"
                className="form-control"
                placeholder="Enter grade"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Grade Student
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default GradeStudentUI;
  