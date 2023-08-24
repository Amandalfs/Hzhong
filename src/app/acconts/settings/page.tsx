import { HeaderHome } from "@/app/components/HeaderHome";
import { FormSettings } from './../../components/FormSettings/index';

export default function Settings(){
    return (<div className="flex flex-col">
        <HeaderHome />
        <section className="flex flex-col justify-center items-center gap-16">
            <h1 className="text-purple-700 text-lg font-sans font-bold">Configurações do perfil</h1>
            <FormSettings />
        </section>
    </div>)
}