"use client";
import { createContext, useState } from "react";
import { apiHzhong } from "./../../services/api";

export interface IUserInfos{
    username: string,
	name: string,
	keypix: string,
}


function UserInfosContextData(){
	const [userInfos, setUserInfos] = useState<IUserInfos>({
		username: "",
		name: "",
		keypix: "",
	});


	async function updateInfos(token: string){
		try {
			const response = await apiHzhong.get("/users/show",{
				headers: {
					Authorization: `Bearer ${token}`
				}
			});

			setUserInfos({
				username: response.data.params.userSend.username,
				name: response.data.params.userSend.name,
				keypix:response.data.params.userSend.keypix
			});
		} catch (error) {
			console.log(error);
		}
	}

	return {
		userInfos, 
		setUserInfos,
		updateInfos	
	};
}


interface IUserInfosContext {
    userInfos:  IUserInfos,
    setUserInfos: (data:IUserInfos) => void,
    updateInfos: (token: string) => void,
}

export const userInfosContext = createContext({} as IUserInfosContext);


export function UserInfosContextProvider({children}){
	return (<userInfosContext.Provider value={UserInfosContextData()}>
		{children}
	</userInfosContext.Provider>);
}