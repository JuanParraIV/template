import HomeIcon from '@mui/icons-material/Home'
import LogoutIcon from '@mui/icons-material/Logout'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Box, Typography } from '@mui/material'
import React from 'react'
export const SideBar: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        borderRadius: '0px 20px 20px 0px',
        backgroundColor: '#f86260',
        boxShadow: '10px 0px 10px rgba(136, 6, 77, 0.3)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: '2rem',
        gap: '26.06rem',
        fontSize: '1.88rem',
        height: '100%',

        width: '20%',
      }}
    >
      <Box
        sx={{
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          gap: '4rem',
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            position: 'relative',
            display: 'inline-block',
            width: '4.19rem',
            height: '2.5rem',
            flexShrink: 0,
          }}
        >
          Logoaa
        </Typography>
        <Box
          sx={{
            flexShrink: 0,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            gap: '0.5rem',
            fontSize: '1rem',
          }}
        >
          <Box
            sx={{
              position: 'relative',
              borderRadius: '50%',
              backgroundColor: '#fff',
              width: '4.44rem',
              height: '4.44rem',
            }}
          />
          <Box
            sx={{
              width: '9rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              gap: '0.25rem',
            }}
          >
            <Box
              sx={{
                position: 'relative',
                fontWeight: 500,
                display: 'inline-block',
                width: '10rem',
                height: '1.19rem',
                flexShrink: 0,
              }}
            >
              Nombre de usuario
            </Box>
            <Box
              sx={{
                position: 'relative',
                fontSize: '0.75rem',
                fontWeight: 500,
                color: 'rgba(255, 255, 255, 0.5)',
                display: 'inline-block',
                width: '10.63rem',
                height: '1.06rem',
                flexShrink: 0,
              }}
            >
              Editar perfíl
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            flexShrink: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            gap: '1.5rem',
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
              gap: '1.5rem',
            }}
          >
            <HomeIcon
              sx={{
                position: 'relative',
                width: '1.5rem',
                height: '1.5rem',
                overflow: 'hidden',
                flexShrink: 0,
                objectFit: 'cover',
              }}
            />
            <Box
              sx={{
                position: 'relative',
                fontWeight: 500,
                display: 'inline-block',
                width: '4.19rem',
                height: '1.88rem',
                flexShrink: 0,
              }}
            >
              Home
            </Box>
          </Box>
          <Box
            sx={{
              flexShrink: 0,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              gap: '1.5rem',
            }}
          >
            <ShoppingCartIcon
              sx={{
                position: 'relative',
                width: '1.19rem',
                height: '1.19rem',
                overflow: 'hidden',
                flexShrink: 0,
                objectFit: 'cover',
              }}
            />
            <Box
              sx={{
                position: 'relative',
                fontWeight: 500,
                display: 'inline-block',
                width: '5rem',
                height: '1.88rem',
                flexShrink: 0,
              }}
            >
              Carrito
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: '1.5rem',
          fontSize: '1.25rem',
        }}
      >
        <LogoutIcon
          sx={{
            position: 'relative',
            width: '1.5rem',
            height: '1.5rem',
            overflow: 'hidden',
            flexShrink: 0,
            objectFit: 'cover',
          }}
        />
        <Box
          sx={{
            position: 'relative',
            fontWeight: 500,
            display: 'inline-block',
            width: '5rem',
            height: '1.56rem',
            flexShrink: 0,
          }}
        >
          Log out
        </Box>
      </Box>
    </Box>
  )
}
