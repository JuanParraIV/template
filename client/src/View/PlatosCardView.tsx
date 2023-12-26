import { PlatosCard } from '@/Components/PlatosCard'
import { Box } from '@mui/material'

export const PlatosCardView = () => {
  return (
    <Box
      flexShrink={0}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'flex-start'}
      justifyContent={'flex-start'}
    >
      <Box
        flexShrink={0}
        display={'flex'}
        flexDirection={'row'}
        alignItems={'flex-start'}
        justifyContent={'flex-start'}
        gap={'7.25rem'}
      >
        {/* PlatosCard */}
        <PlatosCard/>
        <PlatosCard/>
        <PlatosCard/>
      </Box>

    </Box>
  )
}
