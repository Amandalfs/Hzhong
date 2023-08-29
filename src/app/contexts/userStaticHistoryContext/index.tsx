"use client";
import { createContext, useState } from "react";

export interface IUserRegister {
    username: string
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
		username: "",
		balance: 0,
		BalanceInput: 0,
		BalanceOutput: 0,
	});

	const [userExtracts, setUserExtracts] = useState<IExtractsStatic[]>([]);

	async function updateStaticHistory(){
        
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
    updateStaticHistory: () => void,
}

export const userStaticHistoryContext = createContext({} as IUserStaticHistoryContext);


export function UserStaticHistoryContextProvider({children}){
	return (<userStaticHistoryContext.Provider value={UserStaticHistoryContextRegisterData()}>
		{children}
	</userStaticHistoryContext.Provider>);
}