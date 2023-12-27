import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Typography } from "@mui/material"
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CircleIcon from '@mui/icons-material/Circle';
const PlatoName = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        flexShrink: 0,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        fontSize: '1.25rem',
        gap: '8.12rem',
        width: '100%',
        border: '2px solid #000',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          fontSize: '1.95rem',
          gap: '5rem',
          border: '2px solid #000',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            flexShrink: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            fontSize: '1.95rem',
            gap: '0.5rem',
            border: '2px solid #000',

          }}
        >
          <Typography variant="h5"
            sx={{
              fontWeight: 600,
              position: 'relative',
            }}
          >
            Nombre del plato
          </Typography>
          <Box
            sx={{
              position: 'relative',
              fontSize: '1rem',
              fontWeight: 500,
            }}
          >
            Descripción
          </Box>
        </Box>
        <Box
          sx={{
            position: 'relative',
            flexShrink: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            fontSize: '1.95rem',
            gap: '0.5rem',
            border: '2px solid blue',
            width: '100%',

          }}
        >
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">
              <Typography variant="h5"
                sx={{
                  color: '#000',
                  fontWeight: 600,
                  position: 'relative',
                }}
              >
                Ingredientes
              </Typography>
            </FormLabel>
            <FormGroup
              sx={{
                position: 'relative',
                flexWrap: 'wrap',
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                fontSize: '1.95rem',
                gap: '0.5rem',
              }}
            >
              <FormControlLabel
                value="ingrediente"
                control={
                  <Checkbox
                    icon={<CircleOutlinedIcon />}
                    checkedIcon={<CircleIcon />}
                  />}
                label="ingrediente"
              />
              <FormControlLabel
                value="ingrediente"
                control={
                  <Checkbox
                    icon={<CircleOutlinedIcon />}
                    checkedIcon={<CircleIcon />}
                  />}
                label="ingrediente"
              />
              <FormControlLabel
                value="ingrediente"
                control={
                  <Checkbox
                    icon={<CircleOutlinedIcon />}
                    checkedIcon={<CircleIcon />}
                  />}
                label="ingrediente"
              />
              <FormControlLabel
                value="ingrediente"
                control={
                  <Checkbox
                    icon={<CircleOutlinedIcon />}
                    checkedIcon={<CircleIcon />}
                  />}
                label="ingrediente"
              />
              <FormControlLabel
                value="ingrediente"
                control={
                  <Checkbox
                    icon={<CircleOutlinedIcon />}
                    checkedIcon={<CircleIcon />}
                  />}
                label="ingrediente"
              />
              <FormControlLabel
                value="ingrediente"
                control={
                  <Checkbox
                    icon={<CircleOutlinedIcon />}
                    checkedIcon={<CircleIcon />}
                  />}
                label="ingrediente"
              />
              <FormControlLabel
                value="ingrediente"
                control={
                  <Checkbox
                    icon={<CircleOutlinedIcon />}
                    checkedIcon={<CircleIcon />}
                  />}
                label="ingrediente"
              />

            </FormGroup>
          </FormControl>
        </Box>
      </Box>
      <Box
        sx={{
          position: 'relative',
          borderRadius: '20px',
          background: 'linear-gradient(180deg, #f86260, #ebeb60)',
          boxShadow: '10px 0px 10px rgba(136, 6, 77, 0.3)',
          width: '34.38rem',
          height: '34.38rem',
          border: '2px solid #000',

        }}
      />
    </Box>
  )
}

export default PlatoName