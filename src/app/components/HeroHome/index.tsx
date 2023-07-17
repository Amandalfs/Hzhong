import { ButtonRadius } from "../ButtonRadius";
import Image  from 'next/image';
import { Card } from './../Card';

import withdrawIcon from "@/assets/transactions/icons/withdrawIcon.svg";
import DepositIcon from "@/assets/transactions/icons/depositIcon.svg";
import TransferIcon from "@/assets/transactions/icons/transferIcon.svg";
import PayIcon from "@/assets/transactions/icons/payIcon.svg";

export function HeroHome(){
    return (<section>
        <div className="flex flex-col h-[44.25rem] bg-hero bg-cover mt-3">
            <div className="flex flex-col ml-72 mt-44 gap-4">
                <div>
                    <Image src="" alt=""/>
                    <h2 className="text-purple-700 font-sans font-semibold text-2xl ">Boas Vindas a Hzhong</h2>
                </div>
                <h1 className="text-5xl w-96">
                    Fique no controle de
                    Suas <span className="text-purple-700 font-extrabold">Finanças</span>
                </h1>
                <div className="flex flex-row gap-4">
                    <ButtonRadius title="Criar sua conta" variantButton="primary" variantSize="large" />
                    <ButtonRadius title="Checar Saldo" variantButton="segundary" variantSize="large" />
                </div>
            </div>
        </div>
        <div className="flex flex-row h-[29rem] justify-center relative">
            <div className="flex flex-row absolute gap-10 bottom-2/3 ">
                <Card imgUrl={TransferIcon} title="Transfirir Dinheiro" />
                <Card imgUrl={withdrawIcon} title="Sacar" />
                <Card imgUrl={DepositIcon} title="Deposita" />
                <Card imgUrl={PayIcon} title="Pagamentos Online" />
            </div>
        </div>
    </section>)
}