import { FormStepperRegister } from "../components/FormStepperRegister";
import { HeaderHome } from "../components/HeaderHome";
import { UserRegisterContextProvider } from "../contexts/userRegisterContext";
import Image  from 'next/image';

import background from "@/assets/backgroundSingUp.png";

export default function SignUp(){
    return (<UserRegisterContextProvider>
        <main>
            <HeaderHome />
            <section className="flex flex-row justify-around align-center mt-20 mb-20">
                <FormStepperRegister />
                <Image src={background} alt=""/>
            </section>
        </main>
    </UserRegisterContextProvider>)
}