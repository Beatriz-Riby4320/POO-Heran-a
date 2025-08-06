import { Hamster } from './models/Hamster'
import './App.css'

function App() {
 const Bilu = new Hamster('Bilu');

  return (
    <>
      <div>
      <p>{Bilu.emitirSom()}</p>
      <p>{Bilu.ComerSemente()}</p>
      <p>{Bilu.correr()}</p>
    </div>
    </>
  )
}

export default App
