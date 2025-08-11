import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Layouts
import DefaultLayout from './layouts/DefaultLayout'
import EmptyLayout from './layouts/EmptyLayout'

// Pages
import Home from './pages/Home'
import Main from './pages/Main'
import Produto from './pages/Produto'
import Login from './pages/Login'
import Tesste from './components/tesste'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />}>
            <Route index element={<Main />} />
          </Route>
            <Route path="/teste" element={<Tesste />} />
        </Route>
        
        <Route element={<EmptyLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
