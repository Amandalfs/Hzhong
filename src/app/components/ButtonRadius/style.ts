import styled from "styled-components";

export type IVariantButton = 'primary' | 'segundary'
export type IVariantSize = 'small' | 'medium' | 'large'

interface IButtonRadiusContainer {
    variantButton: IVariantButton,
    variantSize: IVariantSize,
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
        colorPrimary: "#FDDEED", // pink 50
        colorSegundary: "hsla(259, 52%, 48%, 1)", // purple 500
    },
    segundary: {
        colorPrimary: "hsla(259, 52%, 48%, 1)", // purple 500
        colorSegundary: "hsla(331, 84%, 88%, 1)", // pink 150
    }
}

export const ButtonRadiusContainer = styled.button<IButtonRadiusContainer>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${props => buttonVariant[props.variantButton].colorPrimary};
    background-color: ${props => buttonVariant[props.variantButton].colorSegundary};
    height: ${props => buttonSize[props.variantSize].height};
    width: ${props => buttonSize[props.variantSize].width};
    font-size: ${props => buttonSize[props.variantSize].fontSize};
    font-family: "Poppins";
    border-radius: 2rem;
    border: none;
    box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.10);

    &:hover {
        transform: scale(1.05);
        transition: 0.5s;
    }
`