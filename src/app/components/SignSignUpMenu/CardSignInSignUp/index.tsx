import { CardMenuContainer, LinkMenu } from "../../Menu/Card/style";

export function CardSignInSignUp(){
    return (<CardMenuContainer>
        <LinkMenu href={"/signIn"}>
            Cadastrar
        </LinkMenu>

        <LinkMenu href={"/signUp"}>
            Login
        </LinkMenu>
    </CardMenuContainer>)
}