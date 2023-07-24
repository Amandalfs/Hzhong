'use client';
import { HeaderHome } from "../components/HeaderHome";
import Image  from 'next/image';
import background from "@/assets/backgroundSignIn.png";
import { ButtonRadius } from "../components/ButtonRadius";
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@chakra-ui/react";

function SignIn(){
    const dataLoginValidSchema = zod.object({
        username: zod.string().min(6, 'Preencha todos os campos'),
        password: zod.string().min(8, 'Preencha todos os campos').max(24),
      })

    type IDataLoginValidSchema = zod.infer<typeof  dataLoginValidSchema>

    const { register, handleSubmit, formState: { errors } } = useForm<IDataLoginValidSchema>({
        resolver: zodResolver(dataLoginValidSchema),
        defaultValues: {
            username: '',
            password: '',
        }       
    });

    function handleLogin(data){
        // signin request http
    }

    return (<main>
            <HeaderHome />
            <section className="flex flex-row justify-around align-center mt-20 mb-20">
                <div className="flex flex-col align-center justify-center">
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleLogin)}>
                        <Input placeholder='Username' size='sm' isRequired={true} 
                        {...register('username')} width="xs"
                        />
                        <Input placeholder='Senha' size='sm' type="password" isRequired={true}
                        {...register('password')} width="xs"
                        />
                        <ButtonRadius title="login" typeButton="submit"/>
                    </form>
                </div>
                <Image src={background} alt="" />
            </section>
        </main>)
}

export default SignIn;