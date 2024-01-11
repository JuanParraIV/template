import { Box, Typography } from '@mui/material'
import React from 'react'

import { AssociateCard } from '@/Components/AssociateCard'

export const AssociateView: React.FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: '2.5rem',
        fontSize: '1.56rem',
      }}
    >
      <Typography
        variant="h6"
        sx={{
          position: 'relative',
          display: 'inline-block',
          width: '13.94rem',
          height: '1.88rem',
          flexShrink: 0,
        }}
      >
        Empresas asociadas
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'center',
          gap: '2.38rem',
          fontSize: '1rem',
          color: '#000',
        }}
      >
        <AssociateCard />
        <AssociateCard />
        <AssociateCard />
        <AssociateCard />
        <AssociateCard />
        <AssociateCard />
      </Box>
    </Box>
  )
}
