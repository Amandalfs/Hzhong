"use client";
import { HeaderHome } from "@/app/components/HeaderHome";
import { FormSettings } from "./../../components/FormSettings/index";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { CookiesContext } from "@/app/contexts/cookiesContext";
import { userInfosContext } from "@/app/contexts/userInfosContext";
import { useCookies } from "@/app/hooks/cookiesHook";

export default function Settings(){
	const router = useRouter();
	const { cookies } = useContext(CookiesContext);
	const { updateInfos } = useContext(userInfosContext);
	const isAuthenticated = cookies.token;
	const { getCookie } = useCookies();

	useEffect(()=>{
		const token = getCookie("token");
		updateInfos(token);
		if(!isAuthenticated){
			router.push("/signin");
		}
	},[]);

	return (<div className="flex flex-col">
		<HeaderHome />
		<section className="flex flex-col justify-center items-center gap-16">
			<h1 className="text-purple-700 text-lg font-sans font-bold">Configurações do perfil</h1>
			<FormSettings />
		</section>
	</div>);
}