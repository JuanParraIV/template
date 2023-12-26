import { Box, Typography } from "@mui/material"

const Alergia = () => {
  return (
    <Box
      sx={{
        width: '58.13rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        gap: '2rem',
      }}
    >
      <Box
        sx={{
          width: '58.13rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          gap: '1rem',
        }}
      >
        <Typography variant="subtitle1"
          sx={{
            position: 'relative',
            display: 'inline-block',
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
            color: '#9295aa',
          }}
        >
          <Box
            sx={{
              position: 'relative',
              fontWeight: 500,
            }}
          >
            Especifique si sufre de algún tipo de alergia
          </Box>
          <Box
            sx={{
              height: '2.38rem',
              flexShrink: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              justifyContent: 'flex-start',
            }}
          >
            <Box
              sx={{
                position: 'relative',
                borderRadius: '10px',
                backgroundColor: '#f86260',
                width: '58.13rem',
                height: '4rem',
              }}
            />
            <Box
              sx={{
                position: 'relative',
                width: '2.79rem',
                height: '2.74rem',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  height: '100%',
                  width: '100%',
                  top: '0%',
                  right: '0%',
                  bottom: '0%',
                  left: '0%',
                  borderRadius: '0px 5px 5px 0px',
                }}
              />
            </Box>
          </Box>
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
            Ingrediente
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
            Ingrediente
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
            Ingrediente
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
            Ingrediente
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Alergia