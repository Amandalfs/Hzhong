"use client";
import { Input } from "@chakra-ui/react";
import { Button } from "../Button";
import { useContext } from "react";
import { userInfosContext } from "@/app/contexts/userInfosContext";
import { CookiesContext } from "@/app/contexts/cookiesContext";
import { useManagerKeys } from "@/app/hooks/managerKeys";
import { useForm } from "react-hook-form";
import { useEditUser } from "@/app/hooks/editUser/useEditUser";
import { ToastContainer } from "react-toastify";

export function FormSettings(){
	const { cookies } = useContext(CookiesContext);
	const { userInfos, updateInfos } = useContext(userInfosContext);
	const { createKey, deleteKey } = useManagerKeys();
	const { editUser } = useEditUser();
    
    type IDataTypeAccontValidSchema = {
		username?: string,
		name?: string,
		newPassword?: string,
		oldPassword?: string,
	}

    const { register, handleSubmit, formState: { errors }, reset } = useForm<IDataTypeAccontValidSchema>({
    	defaultValues: {
    		username: userInfos.username,
    		name: userInfos.name,
    		newPassword: "",
    		oldPassword: "",
    	}       
    });

	
    function handleCreateKey(){
    	createKey(cookies.token);
    	updateInfos(cookies.token);
    }

    function handleDeleteKey(){
    	deleteKey(cookies.token);
    	updateInfos(cookies.token);
    }

    async function handleEditUser(data: IDataTypeAccontValidSchema){
    	await editUser({user: data, token: cookies.token});
    	updateInfos(cookies.token);
    }

    return (<form className="flex flex-col w-96 gap-12" onSubmit={handleSubmit(handleEditUser)}>
    	<ToastContainer />
    	<div className="flex justify-between items-center">
    		<h2 className="text-blue-950 text-xl font-sans font-medium">Informações Basicas</h2>
    		<div className="flex gap-4">
    			<Button title="Cancelar" variantButton="segundary" variantSize="small"
    				activeFunction={reset}
    			/>
    			<Button title="Salvar" variantSize="small" typeButton="submit" />
    		</div>
    	</div>
    	<div className="flex flex-col gap-4 w-80">
    		<Input type="text" placeholder="Username" 
    			{...register("username")}
    		/>
    		<Input type="text" placeholder="Nome"
    			{...register("name")}
    		/>
    		<Input type="text" placeholder="Senha" 
    			{...register("oldPassword")}
    		/>
    		<Input type="text" placeholder="Nova senha" 
    			{...register("newPassword")}
    		/>
    	</div>
    	<div className="flex flex-col gap-4 w-80">
    		<Input type="text"  placeholder="Key Pix" defaultValue={userInfos.keypix} />
    		<div className="flex flex-col gap-2">
    			<Button title="Criar" variantSize="small" variantButton="primary" activeFunction={handleCreateKey} />
    			<Button title="Excluir" variantSize="small" variantButton="segundary" activeFunction={handleDeleteKey} />
    		</div>
    	</div>
    </form>);
}