"use client";
import { MarketPlaceMenu } from "../MarketPlaceMenu";
import { ProfileMenu } from "../ProfileMenu";
import { SignInSignUpMenu } from "../SignSignUpMenu";
import  Image  from "next/image";

import logoWhite from "../../../assets/logoWhite.png";
import { MenuTransactions } from "../MenuTransactions";
import { LoggerdInMenu } from "./LoggedInMenu";
import { isValidCookie } from "@/app/utils/isValidCookie";
import { useEffect, useState } from "react";

export function HeaderHome(){
	const [isAuthenticated, setIsAutenticated] = useState(false);

	async function validCookie(){
		const cookie = await isValidCookie("token");
		setIsAutenticated(cookie);
	}

	useEffect(()=>{
		validCookie();
	},[]);

	return (<header className="flex flex-col">
		<nav className="flex flex-row m-auto mt-2 lg:justify-between w-[90%]">
			<div className="flex flex-row  gap-4 lg:gap-8">
				<MarketPlaceMenu />
				<ProfileMenu />
			</div>
            
			{isAuthenticated?<LoggerdInMenu />:<SignInSignUpMenu />}
		</nav>
		<div className="flex flex-row w-[90%] h-1 m-auto mt-2 mb-2 border-black-100 border-t-2 " ></div>
		<div className="flex flex-row w-[90%] m-auto justify-between items-center">
			<Image src={logoWhite} alt=""/>
			<div>
				<MenuTransactions />
			</div>
		</div>
	</header>);
}

