import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, IconButton, Modal, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const PlatosCard: React.FC = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = (): void => {
    setOpen(true)
  }
  const handleClose = (): void => {
    setOpen(false)
  }
  return (
    <Card>
      <CardActionArea
        onClick={handleOpen}
        sx={{
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '5px 4px 10px rgba(136, 6, 77, 0.25)',
          borderRadius: '20px',
          padding: '1.5rem',
          gap: '1rem',
          boxSizing: 'border-box',
        }}
      >
        <CardMedia
          sx={{
            position: 'relative',
            borderRadius: '20px',
            background: 'linear-gradient(180deg, #f86260, #e9ff60)',
            width: '11.56rem',
            height: '8.56rem',
          }}
        />
        <CardContent
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
          <Typography
            variant="subtitle1"
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
            <Typography
              variant="subtitle1"
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
            <IconButton color="primary" aria-label="add to shopping cart">
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
            </IconButton>
          </Box>
        </CardContent>
      </CardActionArea>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '15.31rem',
            left: '45.88rem',
            borderRadius: '20px',
            backgroundColor: '#fffcf8',
            boxShadow: '5px 4px 10px rgba(136, 6, 77, 0.25)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            padding: '1.5rem 2rem',
            gap: '1rem',
            color: '#000',
          }}
        >
          <Box
            sx={{
              flexShrink: 0,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'center',
              gap: '1rem',
            }}
          >
            <Box
              sx={{
                position: 'relative',
                borderRadius: '20px',
                background: 'linear-gradient(180deg, #f86260, #e9ff60)',
                width: '8.88rem',
                height: '8.88rem',
              }}
            />
            <Box
              sx={{
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center',
                gap: '0.5rem',
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  position: 'relative',
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
          </Box>
          <Box
            sx={{
              flexShrink: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              gap: '0.25',
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{
                position: 'relative',
              }}
            >
              Info del plato
            </Typography>
            <Box
              sx={{
                position: 'relative',
                fontSize: '0.75rem',
                fontWeight: 500,
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{
                  margin: 0,
                }}
              >
                Ingredientes
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  margin: 0,
                }}
              >
                Ingredientes
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  margin: 0,
                }}
              >
                Ingredientes
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              flexShrink: 0,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '15.19rem',
              color: '#f86260',
            }}
          >
            <Typography
              variant="subtitle1"
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
            <IconButton color="primary" aria-label="add to shopping cart">
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
            </IconButton>
          </Box>
          <Link to={`/preferencias`}>
            <Button
              sx={{
                '&:hover': {
                  backgroundColor: '#f86260',
                  color: '#fff',
                },
                borderRadius: '5px',
                backgroundColor: '#f86260',
                width: '18.56rem',
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'row',
                padding: '0.5rem 1rem',
                boxSizing: 'border-box',
                color: '#fff',
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  position: 'relative',
                  display: 'inline-block',
                  width: '5.56rem',
                  height: '1.25rem',
                  flexShrink: 0,
                }}
              >
                Preferencias
              </Typography>
            </Button>
          </Link>
        </Box>
      </Modal>
    </Card>
  )
}
