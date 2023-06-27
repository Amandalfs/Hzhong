import Image from 'next/image'
import { ButtonRadius } from './components/ButtonRadius'


export default function Home() {
  function clicar(){
    console.log("Helllo");
  }

  return (
    <main>
      <ButtonRadius title={"Componente Button"} btnExec={clicar}/>
    </main>
  )
}
