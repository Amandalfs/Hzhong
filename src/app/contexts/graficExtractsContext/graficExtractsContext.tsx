"use client";
import { createContext, useState } from "react";
import { apiHzhong } from "./../../services/api";

export interface IGraficPizza {
   incomes: number
   expenses: number
}

export interface IDataGraficColumn {
    date: string
    value: number
}

function ExtractsRegisterData(){
	const [graficColumnExpenses, setGraficColunmnExpenses] = useState<IDataGraficColumn[]>([]);
	const [graficColumnIncomes, setGraficColunmnIncomes] = useState<IDataGraficColumn[]>([]);
	const [graficPizza, setGraficPiza] = useState<IGraficPizza>({
		incomes: 0,
		expenses: 0,
	});

	async function updateGrafic({ token, endDate, startDate }: {token: string, startDate: Date, endDate: Date}){
		try {

			const { data: columnData } = await apiHzhong.get(`/transactions/grafic/column-day?startDate=${startDate}&endDate=${endDate}`, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			});

			const { data: pizzaData } = await apiHzhong.get(`/transactions/grafic/pizza?startDate=${startDate}&endDate=${endDate}`, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			});

			setGraficColunmnIncomes(columnData.params.revenues);
			setGraficColunmnExpenses(columnData.params.expenes);
            
			setGraficPiza({
				expenses: pizzaData.params.expenses,
				incomes: pizzaData.params.incomes
			});

			
		} catch (error) {
			console.log(error);
		}
	}

	return {
		graficColumnExpenses,
		setGraficColunmnExpenses,
		graficColumnIncomes,
		setGraficColunmnIncomes,
		graficPizza,
		setGraficPiza,
		updateGrafic
	};
}


interface IGraficExtractsContext {
    graficColumnExpenses: IDataGraficColumn[],
    setGraficColunmnExpenses: (data: IDataGraficColumn[]) => void,
    graficColumnIncomes: IDataGraficColumn[],
    setGraficColunmnIncomes: (data: IDataGraficColumn[]) => void,
    graficPizza: IGraficPizza,
    setGraficPiza: (data: IGraficPizza) => void,
    updateGrafic: (data:{token: string, startDate: Date, endDate: Date}) => void
}

export const graficExtractsContext = createContext({} as IGraficExtractsContext);


export function GraficExtractsContextProvider({children}){
	return (<graficExtractsContext.Provider value={ExtractsRegisterData()}>
		{children}
	</graficExtractsContext.Provider>);
}