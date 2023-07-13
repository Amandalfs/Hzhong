import { defaultTheme } from "@/app/styles/themes/DefaultTheme";
import { styled } from "styled-components";

export type VariantButton = 'primary' | 'segundary' | 'ranger' | 'success'
export type VariantSize = 'small' | 'medium' | 'large'

interface IVariants {
    variantButton: VariantButton,
    variantSize: VariantSize,
}

const variantColor = {
    primary: {
        color: defaultTheme.colors.black[50], 
        bg: defaultTheme.colors.purple[600],
        border: 'none'
    },
    segundary: {
        color: defaultTheme.colors.purple[100], 
        bg: defaultTheme.colors.black[50],
        border: `2px solid ${defaultTheme.colors.purple[300]}`
    }
}



const variantSize = {
    small: {
        width: '5.625rem',
        height: '2rem',
        size: '0.5rem',
    },
    medium: {
        width: '5.125rem',
        height: '2.5rem',
        size: '1rem',
    },
    large: {
        width: '4.625rem',
        height: '3rem',
        size: '1.5rem',
    }
}

export const ButtonContainer = styled.button<IVariants>`
    height: ${props => variantSize[props.variantSize].height};
    width: ${props => variantSize[props.variantSize].width};

    color: ${props => variantColor[props.variantButton].color};
    font-size: ${props => variantColor[props.variantButton].size};
    background: ${props => variantColor[props.variantButton].bg};
    border: ${props => variantColor[props.variantButton].border};
    border-radius: 8px;

    align-items: center;
    text-align: center;

    font-family: Actor;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;