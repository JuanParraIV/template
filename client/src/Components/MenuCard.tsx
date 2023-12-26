import { Box, Button, Card, CardActionArea, CardMedia, FormControl, IconButton, InputLabel, MenuItem, Modal, Select, Typography } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom'
import { useState } from 'react'
import AccordionModalPlato from './AccordionModalPlato';

export const MenuCard = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <Card>
      <CardActionArea
        onClick={handleOpen}
        sx={{
          width: '17.88rem',
          height: '20.38rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          }}
        >
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
              <CardMedia
                sx={{
                  position: 'relative',
                  borderRadius: '20px',
                  background: 'linear-gradient(180deg, #f86260, #e9ff60)',
                  width: '14.88rem',
                  height: '7.63rem',
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
                    flexShrink: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.25rem',
                    textAlign: 'center',
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      lineHeight: '1.63rem',
                      fontWeight: 600,
                      display: 'inline-block',
                      width: '5.44rem',
                      height: '1.06rem',
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
                      width: '6.69rem',
                      height: '1.38rem',
                      flexShrink: 0,
                    }}
                  >
                    Lorem impsum
                  </Typography>
                </Box>
                <Box
                  sx={{
                    flexShrink: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    fontSize: '0.63rem',
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      lineHeight: '0.94rem',
                      fontWeight: 600,
                      display: 'inline-block',
                      width: '14.75rem',
                      height: '4.25rem',
                      flexShrink: 0,
                    }}
                  >
                    <Box component='ul'
                      sx={{
                        margin: 0,
                        fontFamily: 'inherit',
                        fontSize: 'inherit',
                        paddingLeft: '0.81rem',
                      }}
                    >
                      <Box component='li'
                      >
                        lorem ipsum
                      </Box>
                      <Box component='li'
                      >
                        lorem ipsum
                      </Box>
                      <Box component='li'
                      >
                        lorem ipsum
                      </Box>
                      <Box component='li'
                      >
                        lorem ipsum
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
                    justifyContent: 'center',
                    gap: '11.31rem',
                    fontSize: '1rem',
                    color: '#f86260',
                  }}
                >
                  <Typography variant="subtitle1"
                    sx={{
                      position: 'relative',
                      display: 'inline-block',
                      width: '2.06rem',
                      height: '1.31rem',
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
                      height: '1.31rem',
                      overflow: 'hidden',
                      flexShrink: 0,
                      objectFit: 'cover',
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
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
            top: '8.31rem',
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
              <Typography variant="subtitle1"
                sx={{
                  position: 'relative',
                }}
              >
                Nombre del menu
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
            <Typography variant="subtitle2"
              sx={{
                position: 'relative',
              }}
            >
              Platos
            </Typography>
            <Box
              sx={{
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                gap: '0.5rem',
                fontSize: '0.88rem',
              }}
            > 
              <AccordionModalPlato/>
              <AccordionModalPlato/>
              <AccordionModalPlato/>
              
            </Box>
          </Box>
          <Box
            sx={{
              flexShrink: 0,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '14.19rem',
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
          <Link to={`/preferencias2`} >
            <Button
              sx={{
                "&:hover": {
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
              <Typography variant="subtitle1"
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

