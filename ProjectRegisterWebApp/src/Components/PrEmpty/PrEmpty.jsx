import { CancelPresentationRounded } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

export default function PrEmpty({ Message }) {
  return (
    <>
      <Box
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          height: 400,
          width: '100%',
          p: 1,
          borderRadius: 2,
          margin: 1,
          bgcolor: 'background.default',
          display: 'flex',
          gridTemplateColumns: { md: '1fr 1fr' },
        }}
      >
        <Typography component="h3">
          {Message ? Message : "Não há dados!"}
        </Typography>
        <CancelPresentationRounded fontSize="medium" sx={{
          ml: 1
        }} />
      </Box>
    </>
  )
}
