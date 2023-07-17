
import { Footer } from './components/Footer';
import { HeaderHome } from './components/HeaderHome';

export default function Home() {
  return (<main className='flex flex-col gap-2'>
    <HeaderHome />
    <Footer />
  </main>)
}
