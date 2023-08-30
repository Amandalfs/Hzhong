"use client";
import Image from "next/image";
import { HeaderHome } from "@/app/components/HeaderHome/index";
import background from "@/assets/transactions/TransctionsBackground.png";
import { TransferMoneyForm } from "@/app/components/TransferMoneyForm";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { CookiesContext } from "@/app/contexts/cookiesContext";
import { userStaticHistoryContext } from "@/app/contexts/userStaticHistoryContext";
import { useCookies } from "@/app/hooks/cookiesHook";

export default function TransferMoney(){
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
			<TransferMoneyForm />
			<Image src={background} alt="" />
		</section>
	</div>);
}