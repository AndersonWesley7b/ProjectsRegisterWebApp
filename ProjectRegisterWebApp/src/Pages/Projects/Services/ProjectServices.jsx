import { ProjectsAPI } from "../../../urls";

export async function GetAllProjects() {
  const response = await ProjectsAPI.get("Projects/GetAllProjects")
  return response.data
}

