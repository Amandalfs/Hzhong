"use client";
import { extractsContext } from "@/app/contexts/extractsContext/extractsContext";
import { useCookies } from "@/app/hooks/cookiesHook";
import { Input } from "@chakra-ui/react";
import {
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	TableContainer,
} from "@chakra-ui/react";

import Pagination from "@mui/material/Pagination";
import { useContext, useEffect, useState } from "react";
import { TypeTransactions } from "../TypeTransactions";

export function ExtractsHistory(){
	const [page, setPage] = useState(1);
	const [startDate, setStartDate ] = useState(new Date());
	const [endDate, setEndDate ] = useState(new Date());
	const { details, extracts, updateExtracts } = useContext(extractsContext);
	const { getCookie } = useCookies();

	function handleChange(event: any, newPage: number){
		const token = getCookie("token");
		updateExtracts({
			token,
			page: newPage,
			startDate,
			endDate,
		});
		setPage(newPage);
	}

	useEffect(()=>{
		const token = getCookie("token");
		updateExtracts({
			token,
			page: 1,
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
					setEndDate(new Date(e.target.value));
				}}
			/>
			<Input    
				placeholder="Selecione a data de início"
				size="md"
				type="date"
				width='auto'
				onChange={(e)=>{
					setStartDate(new Date(e.target.value));
				}}
			/>
		</form>
		<div className="flex flex-col gap-4">
			<TableContainer>
				<Table variant='striped' colorScheme='blackAlpha' maxW="800px">
					<Thead>
						<Tr>
							<Th>Descrição</Th>
							<Th textAlign="center">Tipo</Th>
							<Th textAlign="center">Valor</Th>
							<Th textAlign="center">Data</Th>
						</Tr>
					</Thead>
					<Tbody>
						{
							extracts.map((extract, index) =>{
								return (<Tr h="48px" key={index} className="items-center">
									<td>{extract.descricao}</td>
									<td className="text-center">
										<TypeTransactions statusColor={extract.tipo==="recebido" || extract.tipo === "deposito" ? "purple" : "yellow"}>
											{extract.tipo}
										</TypeTransactions>
									</td>
									<td className="text-center">R$ {extract.saldo}</td>
									<td className="text-center">{extract.data}</td>
								</Tr>);
							})
						}    
					</Tbody>
				</Table>
			</TableContainer>
			<Pagination 
				size="medium" 
				variant="outlined"
				count={details.pagesTotal} 
				defaultPage={1}
				color="secondary" 
				showFirstButton 
				showLastButton
				page={page}
				onChange={handleChange}
			/>
		</div>
	</div>);
}