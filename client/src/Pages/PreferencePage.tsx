import { Footer } from '@/Components/Footer';
import { SideBar } from '@/Components/SideBar';
import { PreferenceHeader } from '@/Components/PreferenceHeader'
import { PreferenceView } from '@/View/PreferenceView';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
export const PreferencePage = () => {
  // const { setProfile, postUserGoogle, authLogin } = useGoogleAuthStore(state => state);
  // const { fetchSneakers } = useSneakerStore(state => state);
  return (
    <Container maxWidth='xl'>
      <Box sx={{
        position: 'relative',
        backgroundColor: '#fff',
        width: '100%',
        height: '103.81rem',
        overflow: 'hidden',
        textAlign: 'left',
        fontSize: '1rem',
        color: '#fff',
        fontFamily: 'Hind Mysuru',
      }}>
        <PreferenceHeader />
        <PreferenceView />

        <Footer />
        <SideBar />
      </Box>
    </Container>

  )
}
