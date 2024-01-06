import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Box, Typography } from "@mui/material";

export const RecommendCard = () => {
  return (
    <Box
      sx={{
        borderRadius: '20px',
        backgroundColor: '#fffcf8',
        boxShadow: '5px 4px 10px rgba(136, 6, 77, 0.25)',
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
    >
      <Box
        sx={{
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            borderRadius: '20px',
            background: 'linear-gradient(180deg, #f86260, #e9ff60)',
            width: '11.56rem',
            height: '8.56rem',
          }}
        />
        <Box
          sx={{
            flexShrink: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.25rem',
          }}
        >
          <Box
            sx={{
              position: 'relative',
              lineHeight: '1.63rem',
              fontWeight: 600,
              display: 'inline-block',
              width: '10.88rem',
              height: '1.38rem',
              flexShrink: 0,
            }}
          >
            Empresa
          </Box>
          <Typography variant="subtitle1"
            sx={{
              position: 'relative',
              fontSize: '0.88rem',
              lineHeight: '1.63rem',
              display: 'inline-block',
              width: '10.88rem',
              height: '1.38rem',
              flexShrink: 0,
            }}
          >
            Lorem ipsum
          </Typography>
          <Box
            sx={{
              flexShrink: 0,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '7.75rem',
              textAlign: 'left',
              fontSize: '1rem',
              color: '#f86260',
            }}
          >
            <Typography variant="subtitle1"
              sx={{
                position: 'relative',
                display: 'inline-block',
                width: '2.06rem',
                height: '1.25rem',
                flexShrink: 0,
              }}
            >
              $00
            </Typography>
            <AddShoppingCartIcon
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
      </Box>
    </Box>
  )
}

