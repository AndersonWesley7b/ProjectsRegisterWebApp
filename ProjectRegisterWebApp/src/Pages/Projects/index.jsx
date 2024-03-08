import { useEffect, useState } from "react"
import { GetAllProjects } from "./Services/ProjectServices"
import { Box, Card, Grid, Paper, styled, Skeleton } from "@mui/material";
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
        <Grid container spacing={1}>
          {Projects.length > 0 ? Projects.map((project) => (
            <Grid item xs={6} sm={4} xl={3}>
              <Box
                sx={{
                  height: 300,
                  p: 1,
                  borderRadius: 2,
                  margin: 1,
                  bgcolor: 'background.default',
                  display: 'grid',
                  gridTemplateColumns: { md: '1fr 1fr' },
                  gap: 2,
                }}
              >

                <Item key={project.ProjectId} elevation={5}>
                  <ProjectCard Project={project} />
                </Item>
              </Box>
            </Grid>
          )) : (new Array(12).fill().map((_, index) => (
            <Grid item xs={6} sm={4} xl={3} key={index}>
              <Box
                sx={{
                  height: 300,
                  p: 1,
                  borderRadius: 2,
                  margin: 1,
                  bgcolor: 'background.default',
                  display: 'grid',
                  gridTemplateColumns: { md: '1fr 1fr' },
                  gap: 2,
                }}
              >
                <Skeleton sx={{
                  borderRadius: 2,
                }} width="208.5%" height={283} variant="rectangular" />
              </Box>
            </Grid>
          )))}
        </Grid>
      </Card>
    </>
  )
}

export default Projects