'use client';

import { ButtonRadiusContainer } from "./style";

export interface IButtonRadius {
    title: string,
}

export function ButtonRadius({title}:IButtonRadius){
    return (<ButtonRadiusContainer>
        {title}
    </ButtonRadiusContainer>)
}