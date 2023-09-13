"use client";
import { createContext, useState } from "react";
import { apiHzhong } from "./../../services/api";

export interface IDetails {
    page: number,
    totalDocs: number,
    pagesTotal: number,
}

export interface IExtracts {
    tipo: string,
    saldo: number,
    data: string,
    descricao: string,
}

function ExtractsRegisterData(){
	const [details, setDetails] = useState<IDetails>({
		page: 0,
		pagesTotal: 0,
		totalDocs: 0,
	});

	const [extracts, setExtracts] = useState<IExtracts[]>([]);

	async function updateExtracts({ token, endDate, page, startDate }: {token: string, startDate: Date, endDate: Date, page: number}){
		try {

			const { data } = await apiHzhong.get(`/transactions/extracts?dateStart=${startDate}&dateEnd=${endDate}&page=${page}`, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			});
			console.log(data);

			setDetails({
				page: data.params.details.page,
				pagesTotal: data.params.details.pagesTotal,
				totalDocs: data.params.details.totalDocs
			});
			setExtracts(data.params.extracts);
		} catch (error) {
			console.log(error);
		}
	}

	return {
		details,
		setDetails,
		extracts,
		setExtracts,
		updateExtracts
	};
}


interface IExtractsContext {
    details:  IDetails,
    setDetails: (data:IDetails) => void,
    extracts:  IExtracts[],
    setExtracts: (data: IExtracts[]) => void,
    updateExtracts: (data: {token: string, startDate: Date, endDate: Date, page: number}) => Promise<void>,
}

export const extractsContext = createContext({} as IExtractsContext);


export function ExtractsContextProvider({children}){
	return (<extractsContext.Provider value={ExtractsRegisterData()}>
		{children}
	</extractsContext.Provider>);
}