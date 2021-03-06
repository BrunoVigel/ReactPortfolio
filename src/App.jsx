import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Home} from './Pages/Home'
import { Contato } from './Pages/Contato'
import { SkillsPage } from './Pages/SkillsPage'
import { Projetos } from './Pages/Projetos'
import { Footer } from './components/Footer'

import {BackToTop} from './components/BackToTop'

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contato' element={<Contato />} />
          <Route path='/skills' element={<SkillsPage />} />
          <Route path='/projetos' element={<Projetos />} />
        </Routes>
      <Footer />
      <BackToTop />
      </BrowserRouter>
      
    </div>
  )
}

export default App
