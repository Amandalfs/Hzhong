import { Footer } from "./components/Footer";
import { HeaderHome } from "./components/HeaderHome";
import { HeroHome } from "./components/HeroHome";

export default function Home() {
	return (<main className='flex flex-col gap-2'>
		<HeaderHome />
		<HeroHome />
		<Footer />
	</main>);
}