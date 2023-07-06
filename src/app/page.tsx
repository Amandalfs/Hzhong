import { ButtonRadius } from './components/ButtonRadius'

export default function Home() {
  return (
    <main>
      <ButtonRadius title={"Menu"} variantButton='primary' variantSize='small'/>
      <br />
      <ButtonRadius title={"Menu"} variantButton='primary' variantSize='medium'/>
      <br />
      <ButtonRadius title={"Menu"} variantButton='primary' variantSize='large'/>

      <br />

      <ButtonRadius title={"Menu"} variantButton='segundary' variantSize='small'/>
      <br />
      <ButtonRadius title={"Menu"} variantButton='segundary' variantSize='medium'/>
      <br />
      <ButtonRadius title={"Menu"} variantButton='segundary' variantSize='large'/>
    </main>
  )
}
