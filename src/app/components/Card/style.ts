'use client'
import { styled } from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;

    width: 15.25rem;
    height: 15.25rem;

    background: ${props => props.theme.colors.black[50]};
    border-radius: 5px;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.19);

    gap: 1.5rem;

    .Image {
        height: 3.5rem;
        width: 3.5rem;
    }

    p {
        color: ${props => props.theme.colors.black[500]};
        text-align: center;
        font-family: 'Poppins';
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }

    &:hover {
        background: #633BBC;

        .Image {
            filter: brightness(2000%);
        }
        p {
            color: ${props => props.theme.colors.black[50]};
        }
    }
`
