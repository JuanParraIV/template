import { Box, Typography } from "@mui/material"
import { SelectPlato } from "./SelectPlato"


export const MenuName = () => {
  return (
    <Box
      sx={{
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: '3rem',
        fontSize: '1.25rem',
        width: '58.13rem',
        
      }}
    >
      <Box
        sx={{
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          fontSize: '1.95rem',
        }}
      >
        <Box
          sx={{
            flexShrink: 0,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          }}
        >
          <Box
            sx={{
              flexShrink: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
            }}
          >
            <Box
              sx={{
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                gap: '0.5rem',
              }}
            >
              <Typography variant="h5"
                sx={{
                  position: 'relative',
                }}
              >
                Nombre del menu
              </Typography>
              <Box
                sx={{
                  position: 'relative',
                  fontSize: '1rem',
                  fontWeight: 500,
                }}
              >
                Descripción
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <SelectPlato />
      <SelectPlato />
    </Box>
  )
}
