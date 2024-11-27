import axios from "axios";


const API_URL = "/api/v1/faculty";


export async function getCourses() {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${API_URL}/courses`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
}

export async function getStudentsInCourse(courseId) {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${API_URL}/courses/${courseId}/students`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
}

export async function gradeStudent(courseId, studentId, grade) {
    const token = localStorage.getItem("token");
    const response = await axios.post(
        `${API_URL}/courses/${courseId}/grade/${studentId}`, { grade }, { headers: { Authorization: `Bearer ${token}` } }
    );
    return response.data;
}
export async function gradeMultipleStudents(courseId, grades) {
    const token = localStorage.getItem("token");
    const response = await axios.post(
        `${API_URL}/courses/${courseId}/grade`, grades, {
            headers: { Authorization: `Bearer ${token}` }
        }
    );
    return response.data;
}

// Grade multiple students in a course