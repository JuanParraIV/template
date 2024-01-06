import { Footer } from '@/Components/Footer';
import { SideBar } from '@/Components/SideBar';
import { FeedView } from '@/View/FeedView';
import Box from '@mui/material/Box';
export const HomePage = () => {
  // const { setProfile, postUserGoogle, authLogin } = useGoogleAuthStore(state => state);
  // const { fetchSneakers } = useSneakerStore(state => state);
  return (
    <Box sx={{
      position: 'relative',
      backgroundColor: '#fff',
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      textAlign: 'left',
      fontSize: '1rem',
      color: '#fff',
      fontFamily: 'Hind Mysuru',
    }}>
      <Box sx={
        {
          position: 'relative',
          display: 'flex',
          width: '100%',
          gap: '3rem',
        }
      }>

        <SideBar />
        <FeedView />

      </Box>
        <Footer />
    </Box>

  )
}
