"use client";
import Image from "next/image";
import { HeaderHome } from "@/app/components/HeaderHome/index";
import background from "@/assets/transactions/TransctionsBackground.png";
import { DepositForm } from "@/app/components/DepositForm";
import { useContext, useEffect } from "react";
import { CookiesContext } from "@/contexts/cookiesContext";
import { useCookies } from "@/app/hooks/cookiesHook";
import { useRouter } from "next/navigation";
import { userStaticHistoryContext } from "@/contexts/userStaticHistoryContext";

export default function Deposit(){
	const router = useRouter();
	const { cookies } = useContext(CookiesContext);
	const { updateStaticHistory } = useContext(userStaticHistoryContext);
	const isAuthenticated = cookies.token;
	const { getCookie } = useCookies();

	useEffect(()=>{
		const token = getCookie("token");
		updateStaticHistory(token);
		if(!isAuthenticated){
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