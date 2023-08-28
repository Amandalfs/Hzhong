"use client";
import { useCookies } from "@/app/hooks/cookiesHook";
import { CardMenuContainer, LinkMenu } from "@/components/Menu/Card/style";

export function CardLogged(){
	const { deleteCookie } = useCookies();
	return (<CardMenuContainer>
		<LinkMenu href={"/dashboard"}>
            Dashboard
		</LinkMenu>

		<LinkMenu href={"/"} onClick={
			()=> {
				deleteCookie("token");
			}
		}>
            Logout
		</LinkMenu>
	</CardMenuContainer>);
}