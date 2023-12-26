
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DefaultPage } from '@/Components/DefaultPage';
import { HomePage } from '@/Pages/HomePage';
import { PreferencePage } from '@/Pages/PreferencePage';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<DefaultPage />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/preferencias' element={<PreferencePage />} />
      </Routes>
    </BrowserRouter>

  );
}


