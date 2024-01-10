
import { DefaultPage } from '@/Components/DefaultPage'
import { HomePage } from '@/Pages/HomePage'
import { PreferencePage } from '@/Pages/PreferencePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PreferencePage2 } from './Pages/PreferencePage2'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<DefaultPage />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/preferencias' element={<PreferencePage />} />
        <Route path='/preferencias2' element={<PreferencePage2 />} />
      </Routes>
    </BrowserRouter>

  );
}


