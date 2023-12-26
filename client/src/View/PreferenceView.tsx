import Alergia from '@/Components/Alergia'
import { MenuName } from '@/Components/MenuName'
import TotalSummary from '@/Components/TotalSummary'
import { Box } from '@mui/material'

export const PreferenceView = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '7.44rem',
        left: '24.56rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        gap: '3rem',
        color: '#000',
      }}
    >
      <MenuName/>
      <Alergia/>
      <TotalSummary/>
    </Box>
  )
}

