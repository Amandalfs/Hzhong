"use client";
import { MenuContainer } from "@/components/Menu/style";
import authenticationIcon from "@/assets/authenticationIcon.png";
import Image from "next/image";
import { Collapse, useDisclosure } from "@chakra-ui/react";
import { CardLogged } from "./CardLogged";

export function LoggerdInMenu(){
	const { isOpen, onToggle } = useDisclosure();

	return (<MenuContainer onClick={onToggle}>
		<div>
			<Image src={authenticationIcon} alt="conta de usuario" />
			<h1>Home</h1>
		</div>
		<div className="relative">
			<Collapse in={isOpen} animateOpacity>
				<CardLogged />
			</Collapse>
		</div>
	</MenuContainer>);
}