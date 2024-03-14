import { Card, Divider, Typography } from "@mui/material";

export default function ProjectCard({ Project }) {
  return (
    <Card sx={{ p: 2, borderRadius: 4, boxShadow: 4 }}>
      <img
        src="https://imgs.search.brave.com/rBS78OEwUY3oBOWH_-8Hc8B7aEnEueeEPZba89Yf-HY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90b3MtZ3JhdGlz/L3Byb2pldG8tYXJx/dWl0ZXRvbmljby1j/b20tY29tcG9zaWNh/by1kZS1kaWZlcmVu/dGVzLWZlcnJhbWVu/dGFzLWNvbS1lc3Bh/Y28tZGUtY29waWFf/MjMtMjE0ODU0MDEy/My5qcGc_c2l6ZT02/MjYmZXh0PWpwZw" // Certifique-se de ter a propriedade "thumbnail" no objeto do projeto
        style={{ width: '100%', height: 'auto', marginBottom: 10, borderRadius: 4 }}
        alt="Project Thumbnail"
      />
      <Divider />
      <Typography variant="h8" sx={{ mt: 2 }}>
        {Project.name}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
        {Project.description}
      </Typography>
      <Divider sx={{ mt: 2 }} />
      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
        <strong>Autor:</strong> {Project.username}
      </Typography>
      {/* <Typography variant="body2" color="text.secondary">
        <strong>Linguagens:</strong> {Project.languages.join(", ")}
      </Typography>
      <Divider sx={{ mt: 2 }} />
      <Typography variant="caption" sx={{ mt: 2 }}>
        {Project.tags.map((tag, index) => (
          <Chip key={index} label={tag} sx={{ marginRight: 1, marginBottom: 1 }} />
        ))}
      </Typography> */}
    </Card>
  );
}
