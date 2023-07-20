import Link from "next/link";
import { FooterContainer, NetworkContainer } from "./style";
import Image from 'next/image';
import logo from "../../../assets/LogoBackground.png";

import twitterLogo from "@/assets/networks/TwitterLogo.svg"
import facebookLogo from "@/assets/networks/FacebookLogo.svg"
import instagramLogo from "@/assets/networks/InstagramLogo.svg"
import youtubeLogo from "@/assets/networks/YoutubeLogo.svg"

export function Footer(){
    return (<FooterContainer className="flex flex-col w-full gap-[10rem]  lg:items-center lg:gap-[20rem] lg:flex-row">
        <div className="flex flex-col gap-4">
            <Image src={logo} alt="" />
            <p>264 Manon road F1 456 caron
            Town</p>
            <p>Office No 3457</p>
            <p>newlabshzhong@gmail.com</p>
            <p>1-890-356-6522</p>
            <nav className="flex flex-row gap-4">
                <Link href={"/"}>
                    <NetworkContainer>
                        <Image src={facebookLogo} alt="" />
                    </NetworkContainer>
                </Link>

                <Link  href={"/"}>
                    <NetworkContainer>
                        <Image src={instagramLogo} alt="" />
                    </NetworkContainer>
                </Link>

                <Link  href={"/"}>
                    <NetworkContainer>
                        <Image src={twitterLogo} alt="" />
                    </NetworkContainer>
                </Link>

                <Link  href={"/"}>
                    <NetworkContainer>
                        <Image src={youtubeLogo} alt="" />
                    </NetworkContainer>
                </Link>
            </nav>
        </div>

        <div className="flex flex-col gap-5">
            <h1>Sobre nós</h1>

            <Link href={"/carrers"}>
                <p>Carreira</p>
            </Link>

            <Link href={"/blog"}>
                <p>Blog</p>
            </Link>
            <Link href={"/teams"}>
                <p>Time</p>
            </Link>
            <Link href={"/contacts"}>
                <p>Contatos</p>
            </Link>
        </div>
    </FooterContainer>)
}