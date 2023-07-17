'use client'
import { styled } from "styled-components";

// className="flex  mtb-[15rem] gap-[15rem] bg-opacity-50 h-96"
export const FooterContainer =  styled.footer`
    display: flex;
    flex-direction: row;
    padding: 4rem 15rem;
    background-image: url(../../.../../backgroundFooter.png);
    background-size: cover;
    background-repeat: no-repeat;

    p {
        color: ${props => props.theme.colors.pink[50]};
        font-family: 'Poppins';
        width: 14rem;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    h1 {
        color: ${props => props.theme.colors.pink[50]};
        font-family: 'Poppins';
        

        font-size: 22px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
`

export const NetworkContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.pink[50]};
`