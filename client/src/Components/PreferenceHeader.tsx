import { Box, Typography } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import { Link } from 'react-router-dom'

export const PreferenceHeader = () => {
  return (
    <>
      <Link to={'/'}>
        <Box
          sx={{
            position: 'absolute',
            top: '2rem',
            left: '19.75rem',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.5rem',
            color: '#f86260',
          }}
        >
          <ArrowBackIosNewIcon
            sx={{
              position: 'relative',
              width: '1.5rem',
              height: '1.5rem',
              overflow: 'hidden',
              flexShrink: 0,
              objectFit: 'contain',
            }}
          />
          <Typography variant='h6'
            sx={{
              position: 'relative',
              display: 'inline-block',
              width: '10.81rem',
              height: '2.44rem',
              flexShrink: 0,
            }}
          >
            Preferencias
          </Typography>
        </Box>
      </Link >
    </>

  )
}
