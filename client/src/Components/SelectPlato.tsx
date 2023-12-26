import { Box, FormControl, InputLabel, MenuItem, NativeSelect, Select, Typography } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

export const SelectPlato = () => {
  return (
    <>
      {/* <Box
        sx={{
          borderRadius: '20px',
          backgroundColor: '#fffcf8',
          boxShadow: '5px 4px 10px rgba(136, 6, 77, 0.25)',
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          padding: '0.5rem 1rem',
          gap: '47.0rem',
          width: '58.13rem',
        }}
      >
        <Box
          sx={{
            flexShrink: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            gap: '1rem',
          }}
        >
          <Typography variant='subtitle1'
            sx={{
              position: 'relative',
              fontWeight: 500,
            }}
          >
            Nombre del plato
          </Typography>
          <Box
            sx={{
              position: 'relative',
              fontSize: '0.75rem',
              fontWeight: 500,
            }}
          >
            Descripción
          </Box>
        </Box>
        <KeyboardArrowDownIcon
          color='primary'
          sx={{
            position: 'relative',
            width: '1.5rem',
            height: '1.5rem',
            overflow: 'hidden',
            flexShrink: 0,
            objectFit: 'contain',
          }}
        />
      </Box > */}
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
          label='Nombre del plato'
          sx={{
            "& .MuiSelect-icon": {
              color: '#f86260',
              position: 'relative',
              width: '1.5rem',
              height: '1.5rem',
              overflow: 'hidden',
              flexShrink: 0,
              objectFit: 'contain',  // Cambia el color del icono a blanco
            },
            "& .MuiOutlinedInput-notchedOutline": {
              border: 'none',  // Remueve el borde del Select
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              border: 'none',  // Remueve el borde del Select al hacer hover
            },
            borderRadius: '20px',
            backgroundColor: '#fffcf8',
            boxShadow: '5px 4px 10px rgba(136, 6, 77, 0.25)',
            flexShrink: 0,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            padding: '0.5rem 1rem',
          }}

        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </>
  )
}
