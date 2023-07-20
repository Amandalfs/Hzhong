import React, { useContext } from "react";
import { Input } from '@chakra-ui/react'
import { ButtonRadius } from '../../ButtonRadius';
import { FormPersonalContainer } from "./style";
import { userRegisterContext } from "@/app/contexts/userRegisterContext";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form";
import * as zod from "zod";

export function FormPersonal(){
    const { goToNext, setUserRegister, userRegister } = useContext(userRegisterContext);
    const dataPersonalValidSchema = zod.object({
        name: zod.string().min(1, 'Preencha todos os campos'),
        cpf: zod.string().min(11, 'Preencha todos os campos').max(11),
        nasc: zod.string(),
      })
    
    type IDataPersonalValidSchema = zod.infer<typeof  dataPersonalValidSchema>

    const { register, handleSubmit, formState: { errors } } = useForm<IDataPersonalValidSchema>({
        resolver: zodResolver(dataPersonalValidSchema),
        defaultValues: {
            name: '',
            cpf: '',
            nasc: '',
        }       
    });


    function handleSuccess(data: IDataPersonalValidSchema){
        setUserRegister({...userRegister, ...data});
        goToNext();
    }

    return (<FormPersonalContainer onSubmit={handleSubmit(handleSuccess)}>
        <Input placeholder='Nome Completo' size='sm' isRequired={true} 
        {...register('name')}
        />
        <Input placeholder='Cpf' size='sm' isRequired={true}
        {...register('cpf')}
        />
        <Input placeholder='Data de nascimento' size='sm' type="text" isRequired={true}
        {...register('nasc')}
        />
        <ButtonRadius variantSize="large" title="Proximo" typeButton="submit"/>
    </FormPersonalContainer>)
}