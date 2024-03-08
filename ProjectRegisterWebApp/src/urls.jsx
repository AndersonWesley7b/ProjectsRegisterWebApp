import axios from "axios";

export const ProjectsAPI = axios.create({
  baseURL: "https://localhost:4430/api/",
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
})

export const UsersAPI = axios.create({
  baseURL: "https://localhost:4435/api/",
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
})