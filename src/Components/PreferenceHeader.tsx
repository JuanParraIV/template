import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const PreferenceHeader: React.FC = () => {
  return (
    <>
      <Link to={'/'}>
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
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
          <Typography
            variant="h6"
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
      </Link>
    </>
  )
}
