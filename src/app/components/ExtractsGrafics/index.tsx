"use client";
import { Input } from "@chakra-ui/react";
import { Pizza } from "./Pizza";
import { CollumnByDay } from "./CollumnByDay";
import { useContext, useEffect, useState } from "react";
import { graficExtractsContext } from "@/app/contexts/graficExtractsContext/graficExtractsContext";
import { useCookies } from "@/app/hooks/cookiesHook";

export function ExtractsGrafics(){
	const [startDate, setStartDate ] = useState(new Date());
	const [endDate, setEndDate ] = useState(new Date());
	const { getCookie } = useCookies();
	const { updateGrafic } = useContext(graficExtractsContext);

	useEffect(()=>{
		const token = getCookie("token");
		updateGrafic({
			token,
			startDate,
			endDate,
		});
	}, [startDate, endDate]);

	return (<div className="flex flex-col gap-8 my-4">
		<form className="flex flex-col gap-4 w-80">
			<h1 className="text-blue-950 text-2xl font-sans font-bold">Selecione o intervalo</h1>
			<Input
				placeholder="Selecione a data de início"
				size="md"
				type="date"
				width='auto'
				onChange={(e)=>{
					setStartDate(new Date(e.target.value));
				}}
			/>
			<Input    
				placeholder="Selecione a data de fim"
				size="md"
				type="date"
				width='auto'
				onChange={(e)=>{
					setEndDate(new Date(e.target.value));
				}}
			/>
		</form>
		<div className="flex gap-4">
			<Pizza />
			<CollumnByDay />
		</div>
	</div>);
}