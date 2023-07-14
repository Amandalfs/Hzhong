'use client'
import { ButtonContainer, VariantButton, VariantSize } from "./style";

interface IButtonProps {
    title: string,
    variantButton?: VariantButton,
    variantSize?: VariantSize,
}

export function Button({variantButton='primary', variantSize='medium', title }:IButtonProps){
    return <ButtonContainer variantButton={variantButton} variantSize={variantSize}>
        {title}
    </ButtonContainer>
}