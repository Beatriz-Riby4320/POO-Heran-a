import { Hamster } from './models/Hamster'
import { Cachorro } from './models/Cachorro';
import './App.css'

function App() {
  const Rex = new Cachorro('Rex');
  const Bilu = new Hamster('Bilu');

  return (
    <>
     <div>
        <h2>Cachorro</h2>
        <p>{Rex.emitirSom()}</p>
        <p>{Rex.correr()}</p>
      </div>

      <div>
        <h2>Hamster</h2>
        <p>{Bilu.emitirSom()}</p>
        <p>{Bilu.ComerSemente()}</p>
        <p>{Bilu.correr()}</p>
      </div>
    </>
  )
 

 
  
}

export default App
