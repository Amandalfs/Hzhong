"use client";
import { Input } from "@chakra-ui/react";
import Image from "next/image";
import { ButtonRadius } from "../ButtonRadius";
import stroke from "@/assets/strokes.svg";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { apiHzhong } from "@/app/services/api";
import { useForm } from "react-hook-form";


import { ToastContainer, toast } from "react-toastify";
import { CookiesContext } from "@/app/contexts/cookiesContext";
import { useContext } from "react";
import { userStaticHistoryContext } from "@/contexts/userStaticHistoryContext";

export function DepositForm(){
	const { cookies } = useContext(CookiesContext);
	const { userStatic, updateStaticHistory } = useContext(userStaticHistoryContext);
	const dataDepositValidSchema = zod.object({
		deposit: zod.coerce.number()
	});
    
    type IDataDepositValidSchema = zod.infer<typeof  dataDepositValidSchema>

    const { register, handleSubmit, reset, watch } = useForm<IDataDepositValidSchema>({
    	resolver: zodResolver(dataDepositValidSchema),
    	defaultValues: {
    		deposit: 1,
    	}  
    });

    async function executeDeposit(data: IDataDepositValidSchema){
    	try {
    		const result = await apiHzhong.patch("/transactions/deposit", {
    			deposit: data.deposit
    		},{
    			headers: {
    				Authorization: `Bearer ${cookies.token}`
    			}
    		});

    		updateStaticHistory(cookies.token);
    		toast.success(result.data.params.descricao);
    		reset();
    	} catch (error) {
    		toast.error("Error depositing. Please try again later.");
    	}

    }

    return (<>
    	<ToastContainer />
    	<form className="flex flex-col gap-8" onSubmit={handleSubmit(executeDeposit)}>
    	<div className="flex flex-col gap-2">
    		<div className="flex gap-2">
    			<Image src={stroke} alt="" />
    			<h1 className="text-purple-700 text-3xl font-sans font-bold">Depositar</h1>
    		</div>
    		<h2 className="text-[#84DA97] text-base font-sans">Saldo da conta</h2>
    		<h1 className="text-blue-950 text-2xl font-sans font-bold">${Number(userStatic.balance).toFixed(2).replace(".", ",")}</h1>
    	</div>
    	<Input placeholder='Valor de deposito' 
    		size='sm' type="number" 
    		isRequired={true} 
    		width="xs" 	 
    		{...register("deposit")}
    	/>
    	<ButtonRadius title="Depositar" typeButton="submit" variantSize="large" />
    	</form>
    </>);
}