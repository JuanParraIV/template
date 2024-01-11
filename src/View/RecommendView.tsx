import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { Box, Typography } from '@mui/material'
import React from 'react'

import { RecommendCard } from '@/Components/RecommendCard'

export const RecommendView: React.FC = () => {
  return (
    <Box
      sx={{
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: '2.5rem',
        fontSize: '1.56rem',
        width: '100%',
      }}
    >
      <Typography
        variant="h6"
        sx={{
          position: 'relative',
          display: 'inline-block',
          width: '13.06rem',
          height: '1.88rem',
          flexShrink: 0,
        }}
      >
        Recomendaciones
      </Typography>
      <Box
        sx={{
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          fontSize: '0.75rem',
        }}
      >
        <Box
          sx={{
            flexShrink: 0,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
          }}
        >
          <KeyboardArrowLeftIcon
            sx={{
              position: 'relative',
              width: '1.5rem',
              height: '1.5rem',
              overflow: 'hidden',
              flexShrink: 0,
              objectFit: 'contain',
            }}
          />
          <RecommendCard />
          <RecommendCard />
          <RecommendCard />
          <RecommendCard />
          <KeyboardArrowRightIcon
            sx={{
              position: 'relative',
              width: '1.5rem',
              height: '1.5rem',
              overflow: 'hidden',
              flexShrink: 0,
              objectFit: 'contain',
            }}
          />
        </Box>
      </Box>
    </Box>
  )
}
