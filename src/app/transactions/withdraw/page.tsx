"use client";
import { useContext, useEffect } from "react";
import Image from "next/image";
import { HeaderHome } from "@/app/components/HeaderHome/index";
import { WithdrawForm } from "@/app/components/WithdrawForm";
import background from "@/assets/transactions/TransctionsBackground.png";

import { CookiesContext } from "@/contexts/cookiesContext";
import { useCookies } from "@/app/hooks/cookiesHook";

import { useRouter } from "next/navigation";
import { userStaticHistoryContext } from "@/app/contexts/userStaticHistoryContext";

export default function Withdraw(){

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
			<WithdrawForm />
			<Image src={background} alt="" />
		</section>
	</div>);
}