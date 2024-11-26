import axios from "axios";

// The base URL for API requests
const API_URL = "/api/v1/faculty";

// Get list of courses taught by the logged-in faculty
export async function getCourses() {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${API_URL}/courses`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
}

// Get students in a specific course
export async function getStudentsInCourse(courseId) {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${API_URL}/courses/${courseId}/students`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
}

// Grade a single student in a course
export async function gradeStudent(courseId, studentId, grade) {
    const token = localStorage.getItem("token");
    const response = await axios.post(
        `${API_URL}/courses/${courseId}/grade/${studentId}`, { grade }, { headers: { Authorization: `Bearer ${token}` } }
    );
    return response.data;
}
export async function gradeMultipleStudents(courseId, grades) {
    const token = localStorage.getItem("token"); // Retrieve the JWT token
    const response = await axios.post(
        `${API_URL}/courses/${courseId}/grade`, grades, // The grades array is sent directly
        {
            headers: { Authorization: `Bearer ${token}` } // Add the Authorization header
        }
    );
    return response.data;
}

// Grade multiple students in a course