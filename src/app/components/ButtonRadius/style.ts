import styled from "styled-components";
import { defaultTheme } from "@/app/styles/themes/DefaultTheme";

export type IVariantButton = 'primary' | 'segundary'
export type IVariantSize = 'small' | 'medium' | 'large'

interface IButtonRadiusContainer {
    $variantButton: IVariantButton,
    $variantSize: IVariantSize,
}

const buttonSize = {
    small: {
        height: "1rem",
        width: "3.5rem",
        fontSize: "0.5rem"
    },
    medium: {
        height: "2rem",
        width: "7rem",
        fontSize: "1rem"
    },
    large: {
        height: "3rem",
        width: "11rem",
        fontSize: "1.5rem"
    }
}

const buttonVariant = {
    primary: {
        color: defaultTheme.colors.pink[50],
        background: defaultTheme.colors.purple[700]
    },
    segundary: {
        color: defaultTheme.colors.purple[700],
        background: defaultTheme.colors.pink[100]
    }
}

export const ButtonRadiusContainer = styled.button<IButtonRadiusContainer>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${props => buttonVariant[props.$variantButton].color};
    background-color: ${props => buttonVariant[props.$variantButton].background};
    height: ${props => buttonSize[props.$variantSize].height};
    width: ${props => buttonSize[props.$variantSize].width};
    font-size: ${props => buttonSize[props.$variantSize].fontSize};
    font-family: "Poppins";
    border-radius: 2rem;
    border: none;
    box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.10);

    &:hover {
        transform: scale(1.05);
        transition: 0.5s;
    }
`