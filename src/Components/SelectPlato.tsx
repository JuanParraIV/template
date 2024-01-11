import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { FormControl, InputLabel, Select } from '@mui/material'
import React from 'react'

import PlatoName from '@/View/PlatoName'

export const SelectPlato: React.FC = () => {
  return (
    <>
      <FormControl fullWidth>
        <InputLabel
          sx={{
            color: '#000',
            fontWeight: 800,
          }}
        >
          Nombre del plato
        </InputLabel>
        <Select
          IconComponent={KeyboardArrowDownIcon}
          label="Nombre del plato"
          sx={{
            '& .MuiSelect-icon': {
              color: '#f86260',
              position: 'relative',
              width: '1.5rem',
              height: '1.5rem',
              overflow: 'hidden',
              flexShrink: 0,
              objectFit: 'contain',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none', // Remueve el borde del Select
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              border: 'none', // Remueve el borde del Select al hacer hover
            },
            borderRadius: '20px',
            backgroundColor: '#fffcf8',
            boxShadow: '5px 4px 10px rgba(136, 6, 77, 0.25)',
            flexShrink: 0,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            padding: '0.5rem',
          }}
        >
          <PlatoName />
        </Select>
      </FormControl>
    </>
  )
}
