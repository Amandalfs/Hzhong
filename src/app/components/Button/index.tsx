"use client";
import { ButtonContainer, VariantButton, VariantSize } from "./style";

interface IButtonProps {
    title: string,
    variantButton?: VariantButton,
    variantSize?: VariantSize,
    activeFunction?: () => void
}

export function Button({variantButton="primary", variantSize="medium", title, activeFunction=()=>{} }:IButtonProps){
	return <ButtonContainer $variantButton={variantButton} $variantSize={variantSize}
		onClick={(e)=>{
            e.stopPropagation();
            e.preventDefault();
			activeFunction();
		}}>
		{title}
	</ButtonContainer>;
}