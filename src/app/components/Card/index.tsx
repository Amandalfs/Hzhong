import {CardContainer} from "./style"
import Image from 'next/image';


interface ICard {
    title: string,
    imgUrl: string,
}

export function Card({imgUrl, title}: ICard){  
    return(<CardContainer>
        <Image className="Image" src={imgUrl} alt="" />
        <p>
            {title}
        </p>
    </CardContainer>)
}