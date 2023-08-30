"use client";
import { Input } from "@chakra-ui/react";
import { Button } from "../Button";
import { useContext } from "react";
import { userInfosContext } from "@/app/contexts/userInfosContext";

export function FormSettings(){
	const { userInfos } = useContext(userInfosContext);
	return (<form className="flex flex-col w-96 gap-12">
		<div className="flex justify-between items-center">
			<h2 className="text-blue-950 text-xl font-sans font-medium">Informações Basicas</h2>
			<div className="flex gap-4">
				<Button title="Cancelar" variantButton="segundary" variantSize="small" />
				<Button title="Salvar" variantSize="small" />
			</div>
		</div>
		<div className="flex flex-col gap-4 w-80">
			<Input type="text" placeholder="Username" defaultValue={userInfos.username} />
			<Input type="text" placeholder="Nome" defaultValue={userInfos.name}/>
			<Input type="text" placeholder="Senha" />
			<Input type="text" placeholder="Nova senha" />
		</div>
		<div className="flex flex-col gap-4 w-80">
			<Input type="text"  placeholder="Key Pix" defaultValue={userInfos.keypix} />
			<div className="flex flex-col gap-2">
				<Button title="Criar" variantSize="small" variantButton="primary" />
				<Button title="Excluir" variantSize="small" variantButton="segundary" />
			</div>
		</div>
	</form>);
}