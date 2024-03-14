import { useEffect, useState } from "react";
import { GetAllProjects } from "./Services/ProjectServices";
import { Card, Grid, Typography, Paper, Skeleton } from "@mui/material";
import ProjectCard from "./Components/ProjectCard";
import PrEmpty from "../../Components/PrEmpty/PrEmpty";

function Projects() {
  const [Projects, SetProjects] = useState([]);
  const [Loading, SetLoading] = useState(false);

  async function GetAllProjectsRequisition() {
    SetLoading(true);
    try {
      const projects = await GetAllProjects();
      SetProjects(projects);
    } catch (err) {
      console.log(err.message);
    } finally {
      SetLoading(false);
    }
  }

  useEffect(() => {
    GetAllProjectsRequisition();
  }, []);

  return (
    <Card sx={{ mt: 2, p: 2 }}>
      <Grid container spacing={2}>
        {Projects.length > 0 && !Loading ? (
          Projects.map((project, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3} xl={2}>
              <ProjectCard Project={project} />
            </Grid>
          ))
        ) : Loading ? (
          new Array(12).fill().map((_, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3} xl={2}>
              <Skeleton
                sx={{ borderRadius: 2 }}
                width="100%"
                height={283}
                variant="rectangular"
              />
            </Grid>
          ))
        ) : (
          <PrEmpty Message={"Não foram encontrados projetos cadastrados!"} />
        )}
      </Grid>
    </Card>
  );
}

export default Projects;
