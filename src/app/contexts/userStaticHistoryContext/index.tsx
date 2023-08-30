"use client";
import { createContext, useState } from "react";
import { apiHzhong } from "./../../services/api";

export interface IUserRegister {
    balance: number
    BalanceOutput: number
    BalanceInput: number
}

export interface IExtractsStatic {
    tipo: string,
    saldo: number,
    data: Date,
    descricao: string,
}

function UserStaticHistoryContextRegisterData(){
	const [userStatic, setUserStatic] = useState<IUserRegister>({
		balance: 0,
		BalanceInput: 0,
		BalanceOutput: 0,
	});

	const [userExtracts, setUserExtracts] = useState<IExtractsStatic[]>([]);

	async function updateStaticHistory(token: string){
		try {
			const response = await apiHzhong.get("/users/show",{
				headers: {
					Authorization: `Bearer ${token}`
				}
			});

			setUserStatic({
				balance: response.data.params.userSend.saldo,
				BalanceInput: 0,
				BalanceOutput: 0,
			});
			setUserExtracts(response.data.params.extracts);
		} catch (error) {
			console.log(error);
		}
	}

	return {
		userStatic,
		setUserStatic,
		userExtracts,
		setUserExtracts,
		updateStaticHistory
	};
}


interface IUserStaticHistoryContext {
    userStatic:  IUserRegister,
    setUserStatic: (data:IUserRegister) => void,
    userExtracts:  IExtractsStatic[],
    setUserExtracts: (data: IExtractsStatic[]) => void,
    updateStaticHistory: (token: string) => void,
}

export const userStaticHistoryContext = createContext({} as IUserStaticHistoryContext);


export function UserStaticHistoryContextProvider({children}){
	return (<userStaticHistoryContext.Provider value={UserStaticHistoryContextRegisterData()}>
		{children}
	</userStaticHistoryContext.Provider>);
}