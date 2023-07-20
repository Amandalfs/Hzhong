import { CardMenuContainer, LinkMenu } from "../../Menu/Card/style";

export function CardSignInSignUp(){
    return (<CardMenuContainer>
        <LinkMenu href={"/signup"}>
            Cadastrar
        </LinkMenu>

        <LinkMenu href={"/signin"}>
            Login
        </LinkMenu>
    </CardMenuContainer>)
}