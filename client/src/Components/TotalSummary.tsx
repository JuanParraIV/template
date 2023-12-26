import AddShoppingCart from "@mui/icons-material/AddShoppingCart"
import { Box, Typography } from "@mui/material"

const TotalSummary = () => {
  return (
    <Box
      sx={{
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        gap: '1rem',
        color: '#f86260',
      }}
    >
      <Typography variant="subtitle1"
        sx={{
          position: 'relative',
          display: 'inline-block',
          width: '3.25rem',
          height: '2.56rem',
          flexShrink: 0,
        }}
      >
        $00
      </Typography>
      <Box
        sx={{
          borderRadius: '5px',
          backgroundColor: '#f86260',
          width: '18.56rem',
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0.5rem 1rem',
          boxSizing: 'border-box',
          gap: '0.63rem',
          fontSize: '1rem',
          color: '#fff',
        }}
      >
        <Typography variant="subtitle1"
          sx={{
            position: 'relative',
            display: 'inline-block',
            width: '7.38rem',
            height: '1.25rem',
            flexShrink: 0,
          }}
        >
          Añadir al carrito
        </Typography>
        <AddShoppingCart
          sx={{
            position: 'relative',
            borderRadius: '3px',
            width: '1.31rem',
            height: '1.25rem',
            overflow: 'hidden',
            flexShrink: 0,
            objectFit: 'cover',
          }}
        />
      </Box>
    </Box>
  )
}

export default TotalSummary