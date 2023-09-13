import React, { useContext } from "react";
import { FormControl, FormErrorMessage, Input } from "@chakra-ui/react";
import { ButtonRadius } from "../../ButtonRadius";
import { FormAccontContainer } from "./style";
import { userRegisterContext } from "@/app/contexts/userRegisterContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as zod from "zod";

export function FormAccont(){
	const { goToNext, setUserRegister, userRegister } = useContext(userRegisterContext);
	const dataAccontValidSchema = zod.object({
		username: zod.string().min(6, "Preencha todos os campos"),
		email: zod.string().email(),
		password: zod.string().min(8, "Preencha todos os campos").max(24,),
		passwordConfirmation: zod.string().min(8, "Preencha todos os campos").max(24),
	});
		
		type IDataAccontValidSchema = zod.infer<typeof  dataAccontValidSchema>

		const { register, handleSubmit, formState: { errors } } = useForm<IDataAccontValidSchema>({
			resolver: zodResolver(dataAccontValidSchema),
			defaultValues: {
				username: "",
				email: "",
				password: "",
				passwordConfirmation: "",
			}       
		});


		function handleSuccess(data: IDataAccontValidSchema){
			if(data.password !== data.passwordConfirmation){
				return;
			}
			setUserRegister({...userRegister, ...data});
			goToNext();
		}
		
		return (<FormAccontContainer onSubmit={handleSubmit(handleSuccess)}>
			<FormControl isInvalid={Boolean(errors.username)}>
				<Input placeholder='Username' size='sm' isRequired={true} 
					{...register("username")}
				/>
				{
					errors.username && errors.username.message && 
					<FormErrorMessage>
						{errors.username.message}
					</FormErrorMessage>
				}
			</FormControl>
				
			<FormControl isInvalid={Boolean(errors.email)}>
				<Input placeholder='Email' size='sm' isRequired={true}
					{...register("email")}
				/>
				{
					errors.email && errors.email.message && 
				<FormErrorMessage>
					{errors.email.message}
				</FormErrorMessage>
				}
			</FormControl>

			<FormControl isInvalid={Boolean(errors.password)}>
				<Input placeholder='Senha' size='sm' type="password" isRequired={true}
					{...register("password")}
				/>
				{
					errors.password && errors.password.message && 
					<FormErrorMessage>
						{errors.password.message}
					</FormErrorMessage>
				}
			</FormControl>

			<FormControl isInvalid={Boolean(errors.passwordConfirmation)}>
				<Input placeholder='Confirmar Senha' size='sm' type="password" isRequired={true}
					{...register("passwordConfirmation")}
				/>
				{
					errors.passwordConfirmation && errors.passwordConfirmation.message && 
					<FormErrorMessage>
						{errors.passwordConfirmation.message}
					</FormErrorMessage>
				}
			</FormControl>
			<ButtonRadius variantSize="large" title="Proximo" typeButton="submit"/>
		</FormAccontContainer>);
}