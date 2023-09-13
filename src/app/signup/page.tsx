"use client";
import { FormStepperRegister } from "../components/FormStepperRegister";
import { HeaderHome } from "../components/HeaderHome";
import { UserRegisterContextProvider } from "../contexts/userRegisterContext";
import Image  from "next/image";

import background from "@/assets/backgroundSingUp.png";
import { useContext, useEffect } from "react";
import { CookiesContext } from "../contexts/cookiesContext";
import { useCookies } from "../hooks/cookiesHook";
import { useRouter } from "next/navigation";

export default function SignUp(){
	const router = useRouter();
	const { cookies } = useContext(CookiesContext);
	const isAuthenticated = cookies.token;
	const { getCookie } = useCookies();

	useEffect(()=>{
    	getCookie("token");
    	if(isAuthenticated){
    		router.push("/dashboard");
    	}
	},[]);


	return (<UserRegisterContextProvider>
		<main>
			<HeaderHome />
			<section className="flex flex-row justify-around align-center mt-20 mb-20">
				<FormStepperRegister />
				<Image src={background} alt=""/>
			</section>
		</main>
	</UserRegisterContextProvider>);
}