"use client";
import { ButtonContainer, VariantButton, VariantSize } from "./style";

interface IButtonProps {
    title: string,
    variantButton?: VariantButton,
    variantSize?: VariantSize,
    activeFunction?: () => void
	typeButton?: "button" | "submit" | "reset"
}

export function Button({variantButton="primary", variantSize="medium", title, activeFunction=()=>{},  typeButton="button"}:IButtonProps){
	return <ButtonContainer type={typeButton} $variantButton={variantButton} $variantSize={variantSize}
		onClick={(e)=>{
			// e.stopPropagation();
			// e.preventDefault();
			activeFunction();
		}}>
		{title}
	</ButtonContainer>;
}