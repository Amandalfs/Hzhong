
import Card from './components/Card';
import money from '../assets/withdrawImg.svg';

export default function Home() {
  return (
      <main>
        <Card imgUrl={money} title="Money" />
      </main>
  )
}
