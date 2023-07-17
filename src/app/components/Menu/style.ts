'use client'
import { styled } from "styled-components";

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 0.25rem;

        Image {
            height: 1.5rem;
            width: 1.5rem;
        }

        h1 {
            color: rgba(37, 22, 70, 0.60);
            font-family: 'Poppins';
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }
    }
`;