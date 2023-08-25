import Image from "next/image";
import { HeaderHome } from "@/app/components/HeaderHome/index";
import background from "@/assets/transactions/TransctionsBackground.png";
import { TransferMoneyForm } from "@/app/components/TransferMoneyForm";

export default function TransferMoney(){
	return (<div>
		<HeaderHome />
		<section className='flex justify-around items-center my-16'>
			<TransferMoneyForm />
			<Image src={background} alt="" />
		</section>
	</div>);
}