"use client";
import { createContext, useState } from "react";

export interface ICookie {
    [key: string]: string
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

export const CookiesContext = createContext({} as ICookieContext);


export function CookiesContextProvider({children}){
	return (<CookiesContext.Provider value={RegisterCookiesData()}>
		{children}
	</CookiesContext.Provider>);
}