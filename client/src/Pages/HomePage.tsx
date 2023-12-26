import { Footer } from '@/Components/Footer';
import { SearchBar } from '@/Components/SearchBar';
import { SideBar } from '@/Components/SideBar';
import { FeedView } from '@/View/FeedView';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
export const HomePage = () => {
  // const { setProfile, postUserGoogle, authLogin } = useGoogleAuthStore(state => state);
  // const { fetchSneakers } = useSneakerStore(state => state);
  return (
    <Container maxWidth='xl'>
      <Box sx={{
        position: 'relative',
        backgroundColor: '#fff',
        width: '100%',
        height: '170.5rem',
        overflow: 'hidden',
        textAlign: 'left',
        fontSize: '1rem',
        color: '#fff',
        fontFamily: 'Hind Mysuru',
      }}>
        <FeedView/>
        <SearchBar />
        <Footer />
        <SideBar />
      </Box>
    </Container>

  )
}
