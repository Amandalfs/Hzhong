"use client";
import { userRegisterContext } from "@/app/contexts/userRegisterContext";
import { ButtonRadius } from "../../ButtonRadius";
import { useContext } from "react";
import { apiHzhong } from "@/app/services/api";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';


export function ConfirmationCreateAccont(){
    const { userRegister  } = useContext(userRegisterContext);
    const router = useRouter();
    
    async function registerUser(){
        try {
            await apiHzhong.post("/users", {
                username: userRegister.username,
                name: userRegister.name,
                nasc: userRegister.nasc,
                email: userRegister.email,
                typeaccont: userRegister.type,
            },
            {
                headers: {
                    password: userRegister.password,
                    passwordconfirmation: userRegister.passwordConfirmation,
                    cpf: userRegister.cpf,
                },
            });
            router.push("/signin");
        } catch (error) {
            console.log(error);
            toast.error(error.response.data);
        }
    }

    return (<div className="flex flex-col w-96 bg-pink-100 rounded-lg gap-4 justify-center items-center">
        <ToastContainer />
        <p>Lorem ipsum dolor sit amet consectetur ad
        ipisicing elit. Neque, aliquam sed ullam quo incidunt eligendi 
        quis, autem amet sunt sint provident, doloremque 
        </p>
        <br/>
        <ButtonRadius title="Cadastrar" activeFunction={registerUser} variantSize="medium" />
    </div>);
}