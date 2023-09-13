import { apiHzhong } from "@/app/services/api";
import { toast } from "react-toastify";

export interface IUserEdit {
    username?: string,
    name?: string,
    oldPassword?: string,
    newPassword?: string
}

export function useEditUser(){
	async function editUser({user, token }: {user: IUserEdit, token: string}){
		try {
			await apiHzhong.patch("/users/modify ",{
				...user,
			}, {
				headers: {
					Authorization: `Bearer ${token}`,
				}
			});
			return toast.success("Infos da conta mudado com sucesso");
		} catch (error) {
			if(error.response.data.params.msg){
				return toast.error(error.response.data.params.msg);
			}
			return toast.error("Falha ao mudar os dados da conta");
		}
	}
	return {
		editUser
	};
}