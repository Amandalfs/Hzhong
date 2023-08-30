import { ButtonRadius } from "../ButtonRadius";
import Image  from "next/image";
import { Card } from "./../Card";

import withdrawIcon from "@/assets/transactions/icons/withdrawIcon.svg";
import DepositIcon from "@/assets/transactions/icons/depositIcon.svg";
import TransferIcon from "@/assets/transactions/icons/transferIcon.svg";
import PayIcon from "@/assets/transactions/icons/payIcon.svg";
import Link from "next/link";

export function HeroHome(){
	return (<section>
		<div className="flex flex-col h-[44.25rem] bg-hero bg-cover mt-3">
			<div className="flex flex-col ml-72 mt-44 gap-4">
				<div>
					<Link href={"/"}>
						<Image src="" alt=""/>
					</Link>
					<h2 className="text-purple-700 font-sans font-semibold text-2xl ">Boas Vindas a Hzhong</h2>
				</div>
				<h1 className="text-5xl w-96">
                    Fique no controle de
                    Suas <span className="text-purple-700 font-extrabold">Finanças</span>
				</h1>
				<div className="flex flex-row gap-4">
					<Link href={"/signup"}>
						<ButtonRadius title="Criar sua conta" variantButton="primary" variantSize="large" />
					</Link>
					<Link href={"/dashboard"}>
						<ButtonRadius title="Checar Saldo" variantButton="segundary" variantSize="large" />
					</Link>
				</div>
			</div>
		</div>
		<div className="flex flex-row h-[29rem] justify-center relative">
			<div className="flex flex-row absolute gap-10 bottom-2/3 ">
				<Link href={"/transactions/transferMoney"}>
					<Card imgUrl={TransferIcon} title="Transfirir Dinheiro" />
				</Link>
				<Link href={"/transactions/withdraw"}>
					<Card imgUrl={withdrawIcon} title="Sacar" />
				</Link>
				<Link href={"/transactions/withdraw"}>
					<Card imgUrl={DepositIcon} title="Deposita" />
				</Link>
				<Link href={"/transactions/payto"}>
					<Card imgUrl={PayIcon} title="Pagamentos Online" />
				</Link>
			</div>
		</div>
	</section>);
}