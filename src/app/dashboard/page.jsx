
import { HeaderHome } from "./../components/HeaderHome";
import { History } from "../components/History";
import { StaticMoneyMonth } from "./../components/StaticMoneyMonth/index";

export default function Dashboard(){
	return (<>
		<HeaderHome />
		<section className="my-40">
			<div className="flex flex-row justify-around items-center">
				<div>
					<StaticMoneyMonth />
				</div>
				<div>
					<History />
				</div>
			</div>
		</section>
	</>);
}