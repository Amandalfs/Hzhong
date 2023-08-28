"use client";
import { createContext, useState } from "react";

export interface ICookie {
    [key: string]: {
        value: string,
    },
}

function RegisterCookiesData(){
	const [cookies, setCookies] = useState<ICookie>({});

	return {
		cookies,
		setCookies
	};
}

interface ICookieContext {
    cookies: ICookie
    setCookies: (data: ICookie) => void
}

export const userRegisterContext = createContext({} as ICookieContext);


export function UserRegisterContextProvider({children}){
	return (<userRegisterContext.Provider value={RegisterCookiesData()}>
		{children}
	</userRegisterContext.Provider>);
}