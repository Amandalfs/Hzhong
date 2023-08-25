
import stroke from "@/assets/strokes.svg";
import Image  from "next/image";
import { ButtonRadius } from "../ButtonRadius";
import { GraficStatics } from "./GraficStatics";

export function StaticMoneyMonth(){
    
	return (<div className="flex flex-col justify-around h-[600px]">
		<div className="flex flex-col gap-2">
			<div className="flex flex-row gap-2">
				<Image src={stroke} alt="" />
				<h2 className="text-base text-purple-700 font-sans font-bold">Saldo da conta</h2>
			</div>
			<h1 className="text-black-800 text-2xl font-sans font-bold">Total de Entradas & Estatísticas da Conta</h1>
			<GraficStatics />
		</div>
		<div className="flex flex-col gap-8">
			<div className="flex flex-col gap-2">
				<h1 className="text-black-800 text-2xl font-sans font-bold">$4,501,263.00</h1>
				<div className="border-t border-gray-300"></div>
				<h3 className="text-green-400 text-base">Saldo</h3>
			</div>
			<div className="flex flex-col gap-2">
				<h1 className="text-black-800 text-2xl font-sans font-bold">$4,501,263.00</h1>
				<div className="border-t border-gray-300"></div>
				<h3 className="text-red-600 text-base">Saldo de Retirada</h3>
			</div>
			<div className="flex justify-around">
				<ButtonRadius title="Sacar" variantSize="large" />
				<ButtonRadius title="Transferir" variantSize="large" />
			</div>
		</div>
	</div>);
}