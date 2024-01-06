import { Box, Typography } from '@mui/material'

export const AssociateCard = () => {
  return (
    <Box
      sx={{
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.5rem',
        gap: '0.5rem',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          borderRadius: '50%',
          background: 'linear-gradient(180deg, #f86260, #e9ff60)',
          width: '5.56rem',
          height: '5.56rem',
        }}
      />
      <Typography variant='subtitle1'
        sx={{
          position: 'relative',
        }}
      >
        Nombre empresa
      </Typography>
      <Box
        sx={{
          position: 'relative',
          fontSize: '0.63rem',
          fontWeight: 300,
          display: 'inline-block',
          width: '3.19rem',
          height: '0.88rem',
          flexShrink: 0,
        }}
      >
        Descripción
      </Box>
    </Box>
  )
}

