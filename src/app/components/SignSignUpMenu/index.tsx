import { MenuContainer } from "../Menu/style";

import authenticationIcon from "../../../assets/authenticationIcon.png"
import Image from "next/image";
import { CardSignInSignUp } from "./CardSignInSignUp";

export function SignInSignUpMenu(){
    return (<MenuContainer>
        <div>
            <Image src={authenticationIcon} alt="conta de usuario" />
            <h1>Cadastrar / Login</h1>
        </div>
        {
            <CardSignInSignUp />
        }
    </MenuContainer>)
}