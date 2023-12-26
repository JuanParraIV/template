import { Box } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

export const SearchBar = () => {
  return (
    <Box
        sx={{
          position: 'absolute',
          top: '2rem',
          left: '20rem',
          height: '2.75rem',
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
            width: '68.06rem',
            height: '2.75rem',
            zIndex: 0,
          }}
        />
        
        <SearchIcon
          sx={{
            position: 'absolute',
            margin: '0 !important',
            height: '47.73%',
            width: '1.85%',
            top: '27.27%',
            right: '1.2%',
            bottom: '25%',
            left: '96.96%',
            maxWidth: '100%',
            overflow: 'hidden',
            maxHeight: '100%',
            objectFit: 'cover',
            zIndex: 1,
          }}
        />
      </Box>
  )
}

