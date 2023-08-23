import { HeaderHome } from "@/components/HeaderHome";
import { ExtractsTab } from "@/components/ExtractsTab"


export default function Extracts(){
    return (<div>
        <HeaderHome />
        <section className="flex justify-center my-16">
            <div className="w-[90%]">
                <ExtractsTab />
            </div>
        </section>
    </div>)
}