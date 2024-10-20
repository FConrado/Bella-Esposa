import { Header } from './Components/Header'
import { Inicio } from './Components/Inicio'
import { Catalogo } from './Components/Catalogo'
import { Local } from './Components/Local'
import { Sobre } from './Components/Sobre'
import { Footer } from './Components/Footer'
import "./global.css"

function App() {
  return (
    <div>
      <Header/>
      <Inicio/>
      <Catalogo/>
      <Local/>
      <Sobre/>
      <Footer/>
    </div>
  )
}

export default App