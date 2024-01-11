import { Box } from '@mui/material'
import React from 'react'

import { PlatosCard } from '@/Components/PlatosCard'

export const PlatosCardView: React.FC = () => {
  return (
    <Box
      flexShrink={0}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'flex-start'}
      justifyContent={'flex-start'}
    >
      <Box
        flexShrink={0}
        display={'flex'}
        flexDirection={'row'}
        alignItems={'flex-start'}
        justifyContent={'flex-start'}
        gap={'7.25rem'}
      >
        {/* PlatosCard */}
        <PlatosCard />
        <PlatosCard />
        <PlatosCard />
      </Box>
    </Box>
  )
}
