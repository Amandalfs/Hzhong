"use client";
import { CookiesContext } from "@/app/contexts/cookiesContext";
import { useContext } from "react";
import Cookies from "js-cookie";

export function useCookies(){
	const { cookies, setCookies } = useContext(CookiesContext);

	function getCookie(name: string){
		const value = Cookies.get(name);
		setCookies({[name]: value});
	}

	function deleteCookie(name: string): void{
		Cookies.remove(name);
		delete cookies[name];
	}

	return {
		getCookie,
		deleteCookie,
	};
}