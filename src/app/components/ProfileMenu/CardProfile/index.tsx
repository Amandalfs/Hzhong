import { CardMenuContainer, LinkMenu } from "../../Menu/Card/style";

export function CardProfile(){
    return (<CardMenuContainer>
        <LinkMenu className="link" href={"/accont/settings"}>
            Configurações
        </LinkMenu>
    </CardMenuContainer>)
}