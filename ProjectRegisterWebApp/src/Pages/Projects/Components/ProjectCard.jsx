import { Card, Divider, Typography } from "@mui/material";

export default function ProjectCard({ Project }) {
  return (
    <>
      <img src="https://imgs.search.brave.com/rBS78OEwUY3oBOWH_-8Hc8B7aEnEueeEPZba89Yf-HY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90b3MtZ3JhdGlz/L3Byb2pldG8tYXJx/dWl0ZXRvbmljby1j/b20tY29tcG9zaWNh/by1kZS1kaWZlcmVu/dGVzLWZlcnJhbWVu/dGFzLWNvbS1lc3Bh/Y28tZGUtY29waWFf/MjMtMjE0ODU0MDEy/My5qcGc_c2l6ZT02/MjYmZXh0PWpwZw"
        style={{ width: '100%', margin: 2 }} />
      <Divider />
      <Card sx={{ mt: 1 }}>
        <Typography variant="h8">
          {Project.Name}
        </Typography>
      </Card>
    </>
  )
}