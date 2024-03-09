import { Grid, Box } from "@mui/material"

export default function CardItem({ Content }) {
  return (
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
        {Content}
      </Box>
    </Grid>
  );
}