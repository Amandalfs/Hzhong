"use client";
import Image from "next/image";
import { HeaderHome } from "@/app/components/HeaderHome/index";
import background from "@/assets/transactions/TransctionsBackground.png";
import { DepositForm } from "@/app/components/DepositForm";
import { useContext, useEffect } from "react";
import { CookiesContext } from "@/contexts/cookiesContext";
import { useCookies } from "@/app/hooks/cookiesHook";
import { useRouter } from "next/navigation";

export default function Deposit(){
	const router = useRouter();
	const { cookies } = useContext(CookiesContext);
	const isAuthenticated = cookies.token;
	const { getCookie } = useCookies();

	useEffect(()=>{
		getCookie("token");
		if(!isAuthenticated){
			console.log("roteado");
			router.push("/signin");
		}
	},[]);

	return (<div>
		<HeaderHome />
		<section className='flex justify-around items-center my-16'>
			<DepositForm />
			<Image src={background} alt="img" />
		</section>
	</div>);
}