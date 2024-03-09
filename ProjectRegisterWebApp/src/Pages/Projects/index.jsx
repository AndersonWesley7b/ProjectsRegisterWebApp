import { useEffect, useState } from "react"
import { GetAllProjects } from "./Services/ProjectServices"
import { Box, Card, Grid, Paper, styled, Skeleton } from "@mui/material";
import ProjectCard from "./Components/ProjectCard";
import PrEmpty from "../../Components/PrEmpty/PrEmpty";
import CardItem from "../../Components/CardItem";

function Projects() {

  const [Projects, SetProjects] = useState([]);

  const [Loading, SetLoading] = useState(false);

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
  }));

  async function GetAllProjectsRequisition() {
    SetLoading(true)
    GetAllProjects().then(
      (projects) => {
        SetProjects(projects)
      }
    ).catch((err) => console.log(err.message))
      .finally(() => SetLoading(false))
  }

  useEffect(() => {
    GetAllProjectsRequisition()
  }, [])
  return (
    <>
      <Card sx={{
        mt: 2
      }}>
        <Grid container>
          {Projects.length > 0 && !Loading ? Projects.map((project, index) => (
            <CardItem key={index} Content=
              {
                <Item key={index} elevation={5}>
                  <ProjectCard Project={project} />
                </Item>} />
          )) : Loading ? (new Array(12).fill().map((_, index) => (
            <CardItem key={index} Content=
              {
                <Skeleton sx={{
                  borderRadius: 2,
                }} width="208.5%" height={283} variant="rectangular" />} />
          ))) : (
            <PrEmpty Message={"Não foram encontratrados projetos cadastrados!"} />
          )}
        </Grid>
      </Card>
    </>
  )
}

export default Projects