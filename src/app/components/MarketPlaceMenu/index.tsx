'use client'
import Image from "next/image";

import { MenuContainer } from "../Menu/style";
import { CardMarketPlace } from "./CardMarketPlace";
import marketPlaceIcon from "../../../assets/MarketPlaceIcon.png"
import { Collapse, useDisclosure } from '@chakra-ui/react';

export function MarketPlaceMenu(){
    const { isOpen, onToggle } = useDisclosure();

    return (<MenuContainer onClick={onToggle}>
        <div>
            <Image src={marketPlaceIcon} alt="Mercado digital" />
            <h1>MarketPlace</h1>
        </div>
        <div className="relative">
            <Collapse in={isOpen} animateOpacity>
                <CardMarketPlace />
            </Collapse>
        </div>
    </MenuContainer>)
}