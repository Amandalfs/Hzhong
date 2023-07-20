'use client';

import Link from "next/link";
import { styled } from "styled-components";

export const  CardMenuContainer = styled.nav`
    display: flex;
    flex-direction: column; 
    position: absolute;
    justify-content: center;
    right: -5rem;
    top: -1rem;
    width: 10rem;
    padding: 0.75rem 0;

    border-radius: 12px;

    background: ${props => props.theme.colors.purple[50]};
    box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.10);
    gap: 0.5rem;
`

export const LinkMenu = styled(Link)`
        color: #000;
        font-family: 'Poppins';
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

        &:hover {
            color: ${props => props.theme.colors.purple[900]};
        }
`