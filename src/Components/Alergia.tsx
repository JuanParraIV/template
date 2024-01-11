import { Box, Typography } from '@mui/material'
import React from 'react'

import { SearchBar } from './SearchBar'

const Alergia: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        gap: '2rem',
        width: '100%',
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          gap: '2rem',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            position: 'relative',
            display: 'inline-block',
            fontWeight: '600',
            width: '7.25rem',
            height: '2.5rem',
            flexShrink: 0,
          }}
        >
          Alergias
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            gap: '0.25rem',
            fontSize: '0.75rem',
            width: '100%',
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              color: '#9295aa',

              position: 'relative',
              fontWeight: 600,
            }}
          >
            {'Especifique si sufre de algún tipo de alergia'}
          </Typography>

          <SearchBar />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          gap: '0.56rem',
          fontSize: '1.25rem',
        }}
      >
        <Box
          sx={{
            flexShrink: 0,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
        >
          <Box
            sx={{
              position: 'relative',
              fontWeight: 500,
              display: 'inline-block',
              width: '7rem',
              height: '1.69rem',
              flexShrink: 0,
            }}
          >
            {'Ingrediente'}
          </Box>
        </Box>
        <Box
          sx={{
            flexShrink: 0,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
        >
          <Box
            sx={{
              position: 'relative',
              fontWeight: 500,
              display: 'inline-block',
              width: '7rem',
              height: '1.69rem',
              flexShrink: 0,
            }}
          >
            {'Ingrediente'}
          </Box>
        </Box>
        <Box
          sx={{
            flexShrink: 0,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
        >
          <Box
            sx={{
              position: 'relative',
              fontWeight: 500,
              display: 'inline-block',
              width: '7rem',
              height: '1.69rem',
              flexShrink: 0,
            }}
          >
            {'Ingrediente'}
          </Box>
        </Box>
        <Box
          sx={{
            flexShrink: 0,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
        >
          <Box
            sx={{
              position: 'relative',
              fontWeight: 500,
              display: 'inline-block',
              width: '7rem',
              height: '1.69rem',
              flexShrink: 0,
            }}
          >
            {'Ingrediente'}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Alergia
