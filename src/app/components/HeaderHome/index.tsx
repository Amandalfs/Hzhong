import { MarketPlaceMenu } from "../MarketPlaceMenu";
import { ProfileMenu } from "../ProfileMenu";
import { SignInSignUpMenu } from "../SignSignUpMenu";
import  Image  from 'next/image';

import logoWhite from "../../../assets/logoWhite.png"

export function HeaderHome(){
    return (<header className="flex flex-col">
        <nav className="flex flex-row m-auto mt-2 justify-between w-[85rem]">
            <div className="flex flex-row gap-4">
                <MarketPlaceMenu />
                <ProfileMenu />
            </div>
            
            <SignInSignUpMenu />
        </nav>
        <div className="flex flex-row w-[85rem] h-1 m-auto mt-2 mb-2 border-black-100 border-t-2 " ></div>
        <div className="flex flex-row w-[85rem] m-auto justify-between items-center">
            <Image src={logoWhite} alt=""/>
            <p>Menu de saque</p>
        </div>
    </header>)
}