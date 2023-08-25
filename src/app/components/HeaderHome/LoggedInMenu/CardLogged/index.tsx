// import { deleteCookie } from "@/app/utils/deleteCookie";
import { CardMenuContainer, LinkMenu } from "@/components/Menu/Card/style";

export function CardLogged(){
	return (<CardMenuContainer>
		<LinkMenu href={"/dashboard"}>
            Dashboard
		</LinkMenu>

		<LinkMenu href={"/"} onClick={
			()=> {
				// deleteCookie("token");
			}
		}>
            Logout
		</LinkMenu>
	</CardMenuContainer>);
}