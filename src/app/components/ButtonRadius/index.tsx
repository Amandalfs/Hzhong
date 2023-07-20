'use client'
import { ButtonRadiusContainer, IVariantButton, IVariantSize } from "./style";

export interface IButtonRadius {
    title: string
    variantButton?: IVariantButton
    variantSize?: IVariantSize
    activeFunction?: () => void
    typeButton?: 'button' | 'submit' | 'reset'
}

export function ButtonRadius({title, variantButton = 'primary', variantSize = 'medium', activeFunction = (function(){}), typeButton='button' }:IButtonRadius){
    return (<ButtonRadiusContainer type={typeButton} $variantButton={variantButton} $variantSize={variantSize}
        onClick={()=>{
            activeFunction();
        }}
    >
        {title}
    </ButtonRadiusContainer>)
}