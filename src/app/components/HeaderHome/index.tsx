import { MarketPlaceMenu } from "../MarketPlaceMenu";
import { ProfileMenu } from "../ProfileMenu";
import { SignInSignUpMenu } from "../SignSignUpMenu";
import  Image  from 'next/image';

import logoWhite from "../../../assets/logoWhite.png"

export function HeaderHome(){
    return (<header className="flex flex-col">
        <nav className="flex flex-row m-auto mt-2 lg:justify-between w-[90%]">
            <div className="flex flex-row  gap-4 lg:gap-8">
                <MarketPlaceMenu />
                <ProfileMenu />
            </div>
            
            <SignInSignUpMenu />
        </nav>
        <div className="flex flex-row w-[90%] h-1 m-auto mt-2 mb-2 border-black-100 border-t-2 " ></div>
        <div className="flex flex-row w-[90%] m-auto justify-between items-center">
            <Image src={logoWhite} alt=""/>
            <p>Menu de saque</p>
        </div>
    </header>)
}