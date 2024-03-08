import { useEffect, useState } from "react"
import { GetAllProjects } from "./Services/ProjectServices"
import { Box, Card, Grid, Paper, styled } from "@mui/material";
import ProjectCard from "./Components/ProjectCard";

function Projects() {

  const [Projects, SetProjects] = useState([]);

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
  }));

  async function GetAllProjectsRequisition() {
    GetAllProjects().then(
      (projects) => {
        SetProjects(projects)
      }
    )
  }

  useEffect(() => {
    GetAllProjectsRequisition()
  }, [])
  return (
    <>
      <Card sx={{
        mt: 2
      }}>
        <Grid container spacing={4}>
          <Grid item xs={3}>
            <Box
              sx={{
                p: 4,
                borderRadius: 2,
                margin: 2,
                bgcolor: 'background.default',
                display: 'grid',
                gridTemplateColumns: { md: '1fr 1fr' },
                gap: 2,
              }}
            >
              {Projects.map((project) => (
                <Item key={project.ProjectId} elevation={5}>
                  <ProjectCard Project={project} />
                </Item>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Card>
    </>
  )
}

export default Projects