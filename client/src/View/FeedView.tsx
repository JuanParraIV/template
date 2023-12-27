import { Box } from '@mui/material'
import { RecommendView } from './RecommendView'
import { AssociateView } from './AssociateView'
import { MenuView } from './MenuView'
import { PaginateView } from './PaginateView'
import { PlatosView } from './PlatosView'
import { SearchBar } from '@/Components/SearchBar'

export const FeedView = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '100%',
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: '2rem',
        color: '#484848',
        margin: '3rem 3rem 0 0',
        border: '2px solid #000',
      }}
    >
      <SearchBar />

      {/* Platos View */}
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        border: '2px solid #000',
        width: '100%',
        height: '100%',
        gap:'3rem',

      }}>

        <PlatosView />

        {/* Paginator View */}
        <PaginateView />

        {/* Menu View */}
        <MenuView />

        {/* Empresas asociadas */}
        <AssociateView />

        {/* Recomendaciones View */}
        <RecommendView />
      </Box>
    </Box>
  )
}

