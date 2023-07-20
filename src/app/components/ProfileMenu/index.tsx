'use client'
import { MenuContainer } from "../Menu/style";

import accontProfile from "../../../assets/accontProfile.png";
import Image from "next/image";
import { CardProfile } from "./CardProfile";
import { Collapse, useDisclosure } from '@chakra-ui/react';

export function ProfileMenu(){
    const { isOpen, onToggle } = useDisclosure();

    return (<MenuContainer onClick={onToggle}>
        <div>
            <Image src={accontProfile} alt="conta de usuario" />
            <h1>Conta</h1>
        </div>
        <div className="relative">
            <Collapse in={isOpen} animateOpacity>
                <CardProfile />
            </Collapse>
        </div>
    </MenuContainer>)
}