import { LinkMenu, CardMenuContainer } from "../../Menu/Card/style";

export function CardTransactions(){
	return (<CardMenuContainer>
		<LinkMenu href={"/transactions/withdraw"}>Sacar</LinkMenu>
		<LinkMenu href={"/transactions/deposit"}>Depositar</LinkMenu>
		<LinkMenu href={"/transactions/transferMoney"}>Transferir</LinkMenu>
		<LinkMenu href={"/transactions/extracts"}>Extratos</LinkMenu>
	</CardMenuContainer>);
}