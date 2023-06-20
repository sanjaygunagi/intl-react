import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Menu } from './components/Menu';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Suspense } from 'react';



const App = () => {

  return (
    <Suspense fallback='loading'>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/:lang_code' element={<Home />} />
          {/* <Route path='/about' element={<About />} /> */}
          <Route path='/:lang_code/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}
export default App

