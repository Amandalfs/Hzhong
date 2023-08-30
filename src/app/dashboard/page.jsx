"use client";
import { HeaderHome } from "./../components/HeaderHome";
import { History } from "../components/History";
import { StaticMoneyMonth } from "./../components/StaticMoneyMonth/index";

import { useContext, useEffect } from "react";
import { CookiesContext } from "../contexts/cookiesContext";
import { useCookies } from "../hooks/cookiesHook";
import { useRouter } from "next/navigation";
import { userStaticHistoryContext } from "../contexts/userStaticHistoryContext";

export default function Dashboard(){

	const router = useRouter();
	const { cookies } = useContext(CookiesContext);
	const { updateStaticHistory } = useContext(userStaticHistoryContext);
	const isAuthenticated = cookies.token;
	const { getCookie } = useCookies();

	useEffect(()=>{
    	const token = getCookie("token");
		updateStaticHistory(token);
    	if(isAuthenticated){
    		router.push("/dashboard");
    	}

	},[]);

	return (<>
		<HeaderHome />
		<section className="my-40">
			<div className="flex flex-row justify-around items-center">
				<div>
					<StaticMoneyMonth />
				</div>
				<div>
					<History />
				</div>
			</div>
		</section>
	</>);
}