import axios from "axios";
import { Student } from "../types/Student";

// const API_URL = `${process.env.BASE_URL}`;
const API_URL = "http://localhost:8081/api/student";

export const getAllStudents = async () => {
     const response = await axios.post(`${API_URL}/get`);
     return response.data.data;
};

export const getStudentById = async (id: string) => {
     const response = await axios.get(`${API_URL}/${id}`);
     return response.data.data;
};

export const createStudent = async (student: Student) => {
     const response = await axios.post(`${API_URL}/save`, student);
     return response.data.data;
};

export const updateStudent = async (id: string, student: Student) => {
     const response = await axios.post(`${API_URL}/update/${id}`, student);
     return response.data.data;
};

export const deleteStudent = async (id: string) => {
     const response = await axios.post(`${API_URL}/delete/${id}`);
     return response.data.message;
};
