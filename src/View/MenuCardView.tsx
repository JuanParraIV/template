import { Box } from '@mui/material'
import React from 'react'

import { MenuCard } from '@/Components/MenuCard'

export const MenuCardView: React.FC = () => {
  return (
    <Box
      sx={{
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: '2.5rem',
      }}
    >
      <MenuCard />
      <MenuCard />
    </Box>
  )
}
