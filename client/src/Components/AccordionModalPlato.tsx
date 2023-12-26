import { Accordion, AccordionDetails, AccordionSummary, Box, MenuItem } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
/* 
  <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
 */
export const AccordionModalPlato = () => {
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
        width: '18.56rem',

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
            }} />}
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
            gap: '1rem'
          }}
        >
          <Box
            sx={{
              position: 'relative',
              borderRadius: '10px',
              background: 'linear-gradient(180deg, #f86260, #e9ff60)',
              width: '2.44rem',
              height: '2.44rem',
            }}
          />
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
      <AccordionDetails>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </AccordionDetails>
    </Accordion>
  )
}

export default AccordionModalPlato