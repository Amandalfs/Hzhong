"use client";
import { Input } from "@chakra-ui/react";
import Image from "next/image";
import { ButtonRadius } from "../ButtonRadius";
import stroke from "@/assets/strokes.svg";
import { useContext } from "react";
import { userStaticHistoryContext } from "@/app/contexts/userStaticHistoryContext";

export function TransferMoneyForm(){
	const { userStatic, updateStaticHistory } = useContext(userStaticHistoryContext);
	return (<form className="flex flex-col gap-8">
		<div className="flex flex-col gap-2">
			<div className="flex gap-1">
				<Image src={stroke} alt="" />
				<h1 className="text-purple-700 text-3xl font-sans font-bold">Transferir dinheiro</h1>
			</div>
			<h2 className="text-[#84DA97] text-base font-sans">Saldo da conta</h2>
			<h1 className="text-blue-950 text-2xl font-sans font-bold">${Number(userStatic.balance).toFixed(2).replace(".", ",")}</h1>
		</div>
		<div className="flex flex-col gap-4">
			<Input placeholder="Keypix" size="sm" type="text" isRequired={true} width="xs" />
			<Input placeholder='Valor de saque' size='sm' type="number" isRequired={true} width="xs" textColor="#84DA97" /> 
			<ButtonRadius title="Transferir" typeButton="submit" variantSize="large" />
		</div>
	</form>);
}