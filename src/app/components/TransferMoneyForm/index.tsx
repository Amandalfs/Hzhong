"use client";
import { Input } from "@chakra-ui/react";
import Image from "next/image";
import { ButtonRadius } from "../ButtonRadius";
import stroke from "@/assets/strokes.svg";
import { useContext } from "react";
import { userStaticHistoryContext } from "@/app/contexts/userStaticHistoryContext";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast, ToastContainer } from "react-toastify";
import { CookiesContext } from "@/app/contexts/cookiesContext";
import { useForm } from "react-hook-form";
import { apiHzhong } from "@/app/services/api";

export function TransferMoneyForm(){
	const { cookies } = useContext(CookiesContext);
	const { userStatic, updateStaticHistory } = useContext(userStaticHistoryContext);
	const dataTransferMoneyValidSchema = zod.object({
		money: zod.coerce.number(),
		keypix: zod.string(),
	});
    
    type IDataTransferMoneyValidSchema = zod.infer<typeof  dataTransferMoneyValidSchema>

    const { register, handleSubmit, reset } = useForm<IDataTransferMoneyValidSchema>({
    	resolver: zodResolver(dataTransferMoneyValidSchema),
    	defaultValues: {
    		money: 1,
    		keypix: ""
    	}  
    });

    async function handleSendingMoney({ money, keypix }: IDataTransferMoneyValidSchema) {
    	try {
    		const result = await apiHzhong.patch("/transactions/sendingMoney", {
    			keypix,
    			value: money
    		},{
    			headers: {
    				Authorization: `Bearer ${cookies.token}`
    			}
    		});
    		updateStaticHistory(cookies.token);
	 		toast.success(result.data.params.extracts.send.descricao);
    		reset();
    	} catch (error) {
    		if(error.response.data){
    			return toast.error(error.response.data.msg);
    		}
    		toast.error("Error depositing. Please try again later.");	
    	}

    }


    return (<form className="flex flex-col gap-8" onSubmit={handleSubmit(handleSendingMoney)}>
    	<ToastContainer />
    	<div className="flex flex-col gap-2">
    		<div className="flex gap-1">
    			<Image src={stroke} alt="" />
    			<h1 className="text-purple-700 text-3xl font-sans font-bold">Transferir dinheiro</h1>
    		</div>
    		<h2 className="text-[#84DA97] text-base font-sans">Saldo da conta</h2>
    		<h1 className="text-blue-950 text-2xl font-sans font-bold">${Number(userStatic.balance).toFixed(2).replace(".", ",")}</h1>
    	</div>
    	<div className="flex flex-col gap-4">
    		<Input placeholder="Keypix" size="sm" type="text" isRequired={true} width="xs" {...register("keypix")} />
    		<Input placeholder='Valor de saque' size='sm' type="number" isRequired={true} width="xs" textColor="#84DA97" {...register("money")} /> 
    		<ButtonRadius title="Transferir" typeButton="submit" variantSize="large" />
    	</div>
    </form>);
}