import AddShoppingCart from '@mui/icons-material/AddShoppingCart'
import { Box, Typography } from '@mui/material'
import React from 'react'

const TotalSummary: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexShrink: 0,
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        gap: '1rem',
        color: '#f86260',
        marginLeft: 'auto',
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{
          position: 'relative',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
          flexShrink: 0,
          width: '100%',
          height: '100%',
          marginLeft: 'auto',
        }}
      >
        $00
      </Typography>
      <Box
        sx={{
          borderRadius: '5px',
          backgroundColor: '#f86260',
          width: '100%',
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0.5rem 3rem',
          boxSizing: 'border-box',
          gap: '0.63rem',
          fontSize: '1rem',
          color: '#fff',
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            position: 'relative',
            display: 'flex',
            flexShrink: 0,
            width: '100%',
            height: '100%',
          }}
        >
          Añadir al carrito
        </Typography>
        <AddShoppingCart
          sx={{
            bgcolor: '#fff',
            color: '#f86260',
            position: 'relative',
            borderRadius: '3px',
            width: '1.31rem',
            height: '1.25rem',
            overflow: 'hidden',
            flexShrink: 0,
            objectFit: 'cover',
          }}
        />
      </Box>
    </Box>
  )
}

export default TotalSummary
