import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { Accordion, AccordionDetails, AccordionSummary, Box } from '@mui/material'
import React from 'react'

import PlatoName from '@/View/PlatoName'

export const AccordionModalMenu: React.FC = () => {
  return (
    <Accordion
      sx={{
        borderRadius: '10px',
        backgroundColor: '#fffcf8',
        boxShadow: '5px 4px 10px rgba(136, 6, 77, 0.25)',
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '100%',
      }}
    >
      <AccordionSummary
        expandIcon={
          <KeyboardArrowDownIcon
            sx={{
              color: '#f86260',
              width: '1.5rem',
              height: '1.5rem',
              overflow: 'hidden',
              flexShrink: 0,
              objectFit: 'contain',
            }}
          />
        }
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{
          color: '#000',
          fontWeight: 600,
          position: 'relative',
          width: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'flex-start',
            gap: '1rem',
          }}
        >
          <Box>
            Nombre del plato
            <Box
              sx={{
                position: 'relative',
                fontSize: '0.63rem',
                fontWeight: 500,
              }}
            >
              Descripción
            </Box>
          </Box>
        </Box>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          width: '100%',
        }}
      >
        <PlatoName />
      </AccordionDetails>
    </Accordion>
  )
}
