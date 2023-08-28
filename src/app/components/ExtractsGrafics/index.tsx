"use client";
import { Input } from "@chakra-ui/react";
import { Pizza } from "./Pizza";
import { CollumnByDay } from "./CollumnByDay";

export function ExtractsGrafics(){
	return (<div className="flex flex-col gap-8 my-4">
		<form className="flex flex-col gap-4 w-80">
			<h1 className="text-blue-950 text-2xl font-sans font-bold">Selecione o intervalo</h1>
			<Input
				placeholder="Selecione a data de início"
				size="md"
				type="date"
				width='auto'
			/>
			<Input    
				placeholder="Selecione a data de início"
				size="md"
				type="date"
				width='auto'
			/>
		</form>
		<div className="flex gap-4">
			<Pizza />
			<CollumnByDay />
		</div>
	</div>);
}