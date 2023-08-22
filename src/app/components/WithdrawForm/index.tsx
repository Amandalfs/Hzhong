"use client";
import { Input } from "@chakra-ui/react";
import Image from "next/image";
import { ButtonRadius } from "../ButtonRadius";
import stroke from "@/assets/strokes.svg"

export function WithdrawForm(){
    return (<form className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
            <div className="flex gap-1">
                <Image src={stroke} alt="" />
                <h1 className="text-purple-700 text-3xl font-sans font-bold">Saldo da conta</h1>
            </div>
            <h2 className="text-[#84DA97] text-base font-sans">Credit Balance</h2>
            <h1 className="text-blue-950 text-2xl font-sans font-bold">$4,500,093.00</h1>
        </div>
        <Input placeholder='Valor de saque' size='sm' type="number" isRequired={true} width="xs" />
        <ButtonRadius title="Sacar" typeButton="submit" variantSize="large" />
    </form>)
}