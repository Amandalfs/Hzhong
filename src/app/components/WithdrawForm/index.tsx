"use client";
import { Input } from "@chakra-ui/react";
import Image from "next/image";
import { ButtonRadius } from "../ButtonRadius";
import stroke from "@/assets/strokes.svg";
import { useContext } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import * as zod from "zod";
import { CookiesContext } from "@/app/contexts/cookiesContext";
import { useForm } from "react-hook-form";
import { apiHzhong } from "@/app/services/api";
import { ToastContainer, toast } from "react-toastify";
import { userStaticHistoryContext } from "@/app/contexts/userStaticHistoryContext";

export function WithdrawForm(){
	const { userStatic, updateStaticHistory } = useContext(userStaticHistoryContext);
	const { cookies } = useContext(CookiesContext);
	const dataWithdradValidSchema = zod.object({
		withdraw: zod.coerce.number()
	});
    
    type IDataWithdradValidSchema = zod.infer<typeof  dataWithdradValidSchema>

    const { register, handleSubmit, reset, watch } = useForm<IDataWithdradValidSchema>({
    	resolver: zodResolver(dataWithdradValidSchema),
    	defaultValues: {
    		withdraw: 1,
    	}  
    });

    async function handleWithdraw({ withdraw }: IDataWithdradValidSchema) {
    	try {
    		const result = await apiHzhong.patch("/transactions/withdraw", {
    			withdraw
    		},{
    			headers: {
    				Authorization: `Bearer ${cookies.token}`
    			}
    		});
    		updateStaticHistory(cookies.token);
    		toast.success(result.data.params.extratoNew.descricao);
    		reset();
    	} catch (error) {
    		if(error.response.data){
    			return toast.error(error.response.data.msg);
    		}
    		toast.error("Error depositing. Please try again later.");
    	}

    }

    return (<form className="flex flex-col gap-8" onSubmit={handleSubmit(handleWithdraw)}>
    	<ToastContainer />
    	<div className="flex flex-col gap-2">
    		<div className="flex gap-1">
    			<Image src={stroke} alt="" />
    			<h1 className="text-purple-700 text-3xl font-sans font-bold">Sacar</h1>
    		</div>
    		<h2 className="text-[#84DA97] text-base font-sans">Credit Balance</h2>
    		<h1 className="text-blue-950 text-2xl font-sans font-bold">${Number(userStatic.balance).toFixed(2).replace(".", ",")}</h1>
    	</div>
    	<Input placeholder='Valor de saque' size='sm' type="number" isRequired={true} width="xs" 
    		{ ...register("withdraw")}
    	/>
    	<ButtonRadius title="Sacar" typeButton="submit" variantSize="large" />
    </form>);
}