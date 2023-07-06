'use client'
import { ButtonRadiusContainer, IVariantButton, IVariantSize } from "./style";

export interface IButtonRadius {
    title: string
    variantButton?: IVariantButton
    variantSize?: IVariantSize
}

export function ButtonRadius({title, variantButton = 'primary', variantSize = 'medium'}:IButtonRadius){
    return (<ButtonRadiusContainer variantButton={variantButton} variantSize={variantSize}>
        {title}
    </ButtonRadiusContainer>)
}