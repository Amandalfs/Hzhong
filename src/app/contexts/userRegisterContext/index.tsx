"use client";
import { useSteps } from "@chakra-ui/stepper";
import { createContext, useState } from "react";

export interface IUserRegister {
    username: string
    email: string
    password: string
    passwordConfirmation: string
    name: string
    cpf: string
    nasc: string
    type: string
}

function UserRegisterData(){
	const [userRegister, setUserRegister] = useState<IUserRegister>({
		username: "",
		email: "",
		password: "",
		passwordConfirmation: "",
		name: "",
		cpf: "",
		nasc: "",
		type: ""
	});

	const steps = [
		{ title: "1 passo", description: "Criar conta" },
		{ title: "2 passo", description: "Dados pessoais" },
		{ title: "3 passo", description: "Tipo de conta" },
	];
    
	const { activeStep, goToNext } = useSteps({
		index: 0,
		count: steps.length,
	});

	return {
		userRegister,
		setUserRegister,
		activeStep,
		goToNext,
		steps,
	};
}

interface IStep {
    title: string,
    description: string,
}

interface IUserRegisterContext {
    userRegister: IUserRegister
    setUserRegister: (data:IUserRegister) => void,
    activeStep: number,
    goToNext: () => void,
    steps: IStep[],
}

export const userRegisterContext = createContext({} as IUserRegisterContext);


export function UserRegisterContextProvider({children}){
	return (<userRegisterContext.Provider value={UserRegisterData()}>
		{children}
	</userRegisterContext.Provider>);
}