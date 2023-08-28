
import Image from "next/image";
import { HeaderHome } from "@/app/components/HeaderHome/index";
import { WithdrawForm } from "@/app/components/WithdrawForm";
import background from "@/assets/transactions/TransctionsBackground.png";

export default function Withdraw(){
	return (<div>
		<HeaderHome />
		<section className='flex justify-around items-center my-16'>
			<WithdrawForm />
			<Image src={background} alt="" />
		</section>
	</div>);
}