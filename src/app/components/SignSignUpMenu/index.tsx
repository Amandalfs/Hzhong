"use client";
import { MenuContainer } from "../Menu/style";

import authenticationIcon from "../../../assets/authenticationIcon.png";
import Image from "next/image";
import { CardSignInSignUp } from "./CardSignInSignUp";
import { Collapse, useDisclosure } from "@chakra-ui/react";

export function SignInSignUpMenu(){
	const { isOpen, onToggle } = useDisclosure();

	return (<MenuContainer onClick={onToggle}>
		<div>
			<Image src={authenticationIcon} alt="conta de usuario" />
			<h1>Cadastrar / Login</h1>
		</div>
		<div className="relative">
			<Collapse in={isOpen} animateOpacity>
				<CardSignInSignUp />
			</Collapse>
		</div>
	</MenuContainer>);
}