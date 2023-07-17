import { ProfileMenuContainer } from "./style";

import accontProfile from "../../../assets/accontProfile.png"
import Image from "next/image";
import { CardProfile } from "./CardProfile";

export function ProfileMenu(){
    return <ProfileMenuContainer>
        <div>
            <Image src={accontProfile} alt="conta de usuario" />
            <h1>Conta</h1>
        </div>
        {
            <CardProfile />
        }
    </ProfileMenuContainer>
}