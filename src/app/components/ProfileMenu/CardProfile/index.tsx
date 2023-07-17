import Link from "next/link";
import { CardProfileContainer, LinkMenu } from "./style";

export function CardProfile(){
    return (<CardProfileContainer>
        <LinkMenu className="link" href={"/accont/settings"}>
            Configurações
        </LinkMenu>
    </CardProfileContainer>)
}