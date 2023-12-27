import { Box, Typography } from "@mui/material"
import { PlatosCardView } from "./PlatosCardView"

export const PlatosView = () => {
  return (
    <Box
      sx={{
        width: "100%",
        border: '2px solid #000',

      }}
      display='flex'
      flexShrink={0}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"flex-start"}
      gap={"2.5rem"}
      textAlign={"center"}
    >
      <Typography
        variant="subtitle1"
        position={"relative"}
        fontSize={"1.56rem"}
        display={"inline-block"}
        textAlign={"left"}
        width={"4.31rem"}
        height={"1.88rem"}
        flexShrink={0}
      >
        Platos
      </Typography>
      <PlatosCardView/>
      <PlatosCardView/>
    </Box>
  )
}
