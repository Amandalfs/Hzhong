import Image from 'next/image';
import { HeaderHome } from '@/app/components/HeaderHome/index';
import background from '@/assets/transactions/TransctionsBackground.png';
import { DepositForm } from '@/app/components/DepositForm';

export default function Deposit(){
    return (<div>
            <HeaderHome />
            <section className='flex justify-around items-center my-16'>
                <DepositForm />
                <Image src={background} alt="" />
            </section>
        </div>)
}