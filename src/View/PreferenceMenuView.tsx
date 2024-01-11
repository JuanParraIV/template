import { Box } from '@mui/material'
import React from 'react'

import Alergia from '@/Components/Alergia'
import { MenuName } from '@/Components/MenuName'
import { PreferenceHeader } from '@/Components/PreferenceHeader'
import TotalSummary from '@/Components/TotalSummary'

export const PreferenceMenuView: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '100%',
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: '3rem',
        margin: '3rem 3rem 0 0',
        color: '#000',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          width: '100%',
          height: '100%',
          gap: '3rem',
        }}
      >
        <PreferenceHeader />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            width: '100%',
            height: '100%',
            gap: '3rem',
            padding: '2rem 4rem',
          }}
        >
          <MenuName />
          <Alergia />
          <TotalSummary />
        </Box>
      </Box>
    </Box>
  )
}
