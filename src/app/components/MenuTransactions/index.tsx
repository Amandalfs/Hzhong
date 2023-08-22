"use client";
import { Collapse, useDisclosure } from "@chakra-ui/react";
import { CardTransactions } from "./CardTransactions";
import { ButtonRadius } from "../ButtonRadius";
import { MenuContainer } from "../Menu/style";

export function MenuTransactions(){
    const { isOpen, onToggle } = useDisclosure();

    return (<MenuContainer>
        <ButtonRadius title="Menu" activeFunction={onToggle} />
        <div className="relative">
            <Collapse in={isOpen} animateOpacity>
                <CardTransactions />
            </Collapse>
        </div>
    </MenuContainer>)
}