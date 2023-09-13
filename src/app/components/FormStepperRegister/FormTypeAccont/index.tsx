import React, { useContext } from "react";
import { Select } from "@chakra-ui/react";
import {
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableCaption,
	TableContainer,
} from "@chakra-ui/react";
import { ButtonRadius } from "../../ButtonRadius";
import { FormTypeAccontContainer } from "./style";
import { userRegisterContext } from "@/app/contexts/userRegisterContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as zod from "zod";

export function FormTypeAccont(){
	const { goToNext, setUserRegister, userRegister } = useContext(userRegisterContext);
	const dataTypeAccontValidSchema = zod.object({
		type: zod.string().min(1, "Preencha todos os campos"),
	});
    
    type IDataTypeAccontValidSchema = zod.infer<typeof  dataTypeAccontValidSchema>

    const { register, handleSubmit, formState: { errors } } = useForm<IDataTypeAccontValidSchema>({
    	resolver: zodResolver(dataTypeAccontValidSchema),
    	defaultValues: {
    		type: "",
    	}       
    });


    function handleSuccess(data: IDataTypeAccontValidSchema){
    	setUserRegister({...userRegister, ...data});
    	goToNext();
    }

    return (<FormTypeAccontContainer onSubmit={handleSubmit(handleSuccess)}>
    	<TableContainer>
    		<Table size='sm'>
    			<Thead>
    				<Tr>
    					<Th>Tipo de conta</Th>
    					<Th>Limite Diario</Th>
    					<Th isNumeric>Limite por saque</Th>
    				</Tr>
    			</Thead>
    			<Tbody>
    				<Tr>
    					<Td>Poupanca</Td>
    					<Td>31321</Td>
    					<Td isNumeric>31321</Td>
    				</Tr>
    				<Tr>
    					<Td>Poupanca</Td>
    					<Td>31321</Td>
    					<Td isNumeric>1321</Td>
    				</Tr>
    				<Tr>
    					<Td>Poupanca</Td>
    					<Td>1321</Td>
    					<Td isNumeric>1321</Td>
    				</Tr>
    			</Tbody>
    		</Table>
    	</TableContainer>
    	<Select placeholder='Tipo da conta' size='sm' isRequired={true} 
    		{...register("type")}
			helperText={errors.type && errors.type.message ? errors.type.message : ""}
    	>
    		<option value="poupanca">Poupança</option>
    		<option value="universitaria">Universitaria</option>
    		<option value="corrente">corrente</option>
    	</Select>
    	<ButtonRadius variantSize="large" title="Proximo" typeButton="submit"/>
    </FormTypeAccontContainer>);
}