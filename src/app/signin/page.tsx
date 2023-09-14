"use client";
import { HeaderHome } from "../components/HeaderHome";
import Image  from "next/image";
import background from "@/assets/backgroundSignIn.png";
import { ButtonRadius } from "../components/ButtonRadius";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCookies } from "../hooks/cookiesHook";
import { CookiesContext } from "@/contexts/cookiesContext";

import { ToastContainer, toast } from "react-toastify";
import { useSessions } from "../hooks/sessionsUser/useSessions";

function SignIn(){
	const router = useRouter();

	const { cookies } = useContext(CookiesContext);
	const isAuthenticated = cookies.token;
	const { getCookie } = useCookies();

	const dataLoginValidSchema = zod.object({
		username: zod.string().min(6, "Preencha todos os campos"),
		password: zod.string().min(8, "Preencha todos os campos").max(24),
	});

    type IDataLoginValidSchema = zod.infer<typeof  dataLoginValidSchema>;

    const { register, handleSubmit, formState: { errors } } = useForm<IDataLoginValidSchema>({
    	resolver: zodResolver(dataLoginValidSchema),
    	defaultValues: {
    		username: "",
    		password: "",
    	}       
    });

    const { sessionsUser } = useSessions();

    async function handleLogin({password, username}: IDataLoginValidSchema){
    	const token = sessionsUser(username, password);
    	if(token){
    		router.push("/dashboard");
    	}
    }
	

    useEffect(()=>{
    	getCookie("token");
    	if(isAuthenticated){
    		router.push("/dashboard");
    	}
    },[]);

	
    return (<main>
    	<HeaderHome />
    	<ToastContainer />
    	<section className="flex flex-row justify-around align-center mt-20 mb-20">
    		<div className="flex flex-col align-center justify-center">
    			<form className="flex flex-col gap-4" onSubmit={handleSubmit(handleLogin)}>
    				<Input placeholder='Username' size='sm' isRequired={true} 
    					{...register("username")} width="xs"
    				/>
    				<Input placeholder='Senha' size='sm' type="password" isRequired={true}
    					{...register("password")} width="xs"
    				/>
    				<ButtonRadius title="login" typeButton="submit"></ButtonRadius>
    			</form>
    		</div>
    		<Image src={background} alt="" />
    	</section>
    </main>);
}

export default SignIn;