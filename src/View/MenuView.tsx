import { Box, Typography } from '@mui/material'
import React from 'react'

import { MenuCardView } from '@/View/MenuCardView'

export const MenuView: React.FC = () => {
  return (
    <Box
      sx={{
        height: '48rem',
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: '2.5rem',
        width: '100%',
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{
          position: 'relative',
          fontSize: '1.56rem',
          display: 'inline-block',
          width: '4.81rem',
          height: '1.88rem',
          flexShrink: 0,
        }}
      >
        Menus
      </Typography>
      <MenuCardView />
      <MenuCardView />
    </Box>
  )
}
