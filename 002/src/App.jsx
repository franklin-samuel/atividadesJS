import './App.css'
import Saudacao from './components/Saudacao'
import Perfil from './components/Perfil'
import Contador from './components/Contador'
import Interruptor from './components/Interruptor'

function App() {

  return (
    <>
      <section id="atividade" style={{ marginTop: '50px' }}>
        <Saudacao />
        <Perfil nome="Maria" />
        <Perfil nome="João" />
        <Contador />
        <Interruptor />
      </section>
    </>
  )
}

export default App
