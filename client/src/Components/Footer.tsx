import { Box, Typography } from "@mui/material"

export const Footer = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        bottom: 0,
        left: '0rem',
        marginTop: '3rem',
        backgroundColor: '#f86260',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 0.5rem 0.5rem',
        boxSizing: 'border-box',
        gap: '2rem',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '25.75rem',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            fontWeight: 500,
          }}
        >
          <Typography variant="subtitle1"
            sx={{
              margin: 0,
            }}
          >
            Política de publicidad
          </Typography>
          <Typography variant="subtitle1"
            sx={{
              margin: 0,
            }}
          >
            Términos y condiciones
          </Typography>
          <Typography variant="subtitle1"
            sx={{
              margin: 0,
            }}
          >
            Seguridad
          </Typography>
        </Box>
        <Box
          sx={{
            flexShrink: 0,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '30.38rem',
            fontSize: '1.56rem',
          }}
        >
          <Box
            sx={{
              flexShrink: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="subtitle1"
              sx={{
                position: 'relative',
                display: 'inline-block',
                width: '4.19rem',
                height: '2rem',
                flexShrink: 0,
              }}
            >
              LOGO
            </Typography>
            <Box
              sx={{
                position: 'relative',
                fontSize: '1rem',
                fontWeight: 500,
                textAlign: 'center',
                display: 'inline-block',
                width: '9.69rem',
                height: '2rem',
                flexShrink: 0,
              }}
            >
              correo@correo.com
            </Box>
          </Box>
          <Box
            sx={{
              position: 'relative',
              fontSize: '1rem',
              fontWeight: 500,
            }}
          >
            <Typography variant="subtitle1"
              sx={{
                margin: 0,
              }}
            >
              Home
            </Typography>
            <Typography variant="subtitle1"
              sx={{
                margin: 0,
              }}
            >
              Empresas
            </Typography>
            <Typography variant="subtitle1"
              sx={{
                margin: 0,
              }}
            >
              Carritos
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          position: 'relative',
          fontWeight: 500,
          display: 'inline-block',
          width: '12.63rem',
        }}
      >
        2023 LOGO All right reserved
      </Box>
    </Box>
  )
}
