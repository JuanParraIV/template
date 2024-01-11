import Box from '@mui/material/Box'
import React from 'react'

import { Footer } from '@/Components/Footer'
import { SideBar } from '@/Components/SideBar'
import { PreferenceMenuView } from '@/View/PreferenceMenuView'
export const PreferencePage2: React.FC = () => {
  // const { setProfile, postUserGoogle, authLogin } = useGoogleAuthStore(state => state);
  // const { fetchSneakers } = useSneakerStore(state => state);
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        textAlign: 'left',
        fontSize: '1rem',
        color: '#fff',
        fontFamily: 'Hind Mysuru',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          width: '100%',
          gap: '3rem',
        }}
      >
        <SideBar />
        <PreferenceMenuView />
      </Box>
      <Footer />
    </Box>
  )
}
