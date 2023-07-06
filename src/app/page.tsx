import { ButtonRadius } from './components/ButtonRadius'

export default function Home() {
  return (
      <main>
        <ButtonRadius title={"Menu"} variantSize='small'  />
        <br />
        <ButtonRadius title={"Menu"} variantSize='medium'  />
        <br />
        <ButtonRadius title={"Menu"} variantSize='large'  />

        <br />

        <ButtonRadius title={"Menu"} variantButton='segundary' variantSize='small'/>
        <br />
        <ButtonRadius title={"Menu"} variantButton='segundary' variantSize='medium'/>
        <br />
        <ButtonRadius title={"Menu"} variantButton='segundary' variantSize='large'/>
      </main>
  )
}
