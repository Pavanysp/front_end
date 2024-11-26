import axios from "axios";

const API_URL = "/api/v1/auth";

export async function login(username, password) {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    return response.data;
}