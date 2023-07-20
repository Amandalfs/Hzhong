import Image from "next/image";

import { MenuContainer } from "../Menu/style";
import { CardMarketPlace } from "./CardMarketPlace";
import marketPlaceIcon from "../../../assets/MarketPlaceIcon.png"

export function MarketPlaceMenu(){
    return (<MenuContainer>
        <div>
            <Image src={marketPlaceIcon} alt="Mercado digital" />
            <h1>Conta</h1>
        </div>
        {
           false && <CardMarketPlace />
        }
    </MenuContainer>)
}