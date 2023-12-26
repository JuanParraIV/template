import { Box } from '@mui/material'
import { RecommendView } from './RecommendView'
import { AssociateView } from './AssociateView'
import { MenuView } from './MenuView'
import { PaginateView } from './PaginateView'
import { PlatosView } from './PlatosView'

export const FeedView = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '6.63rem',
        left: '20.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: '2rem',
        color: '#484848',
      }}
    >
      {/* Platos View */}
      <PlatosView/>

      {/* Paginator View */}
      <PaginateView/>

      {/* Menu View */}
      <MenuView />

      {/* Empresas asociadas */}
      <AssociateView />

      {/* Recomendaciones View */}
      <RecommendView />
    </Box>
  )
}

