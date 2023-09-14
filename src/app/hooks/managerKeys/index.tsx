import { apiHzhong } from "@/app/services/api";
import { toast } from "react-toastify";

interface IManagerKeys{
    createKey(token: string): void,
    deleteKey(token: string): void,
}

export function useManagerKeys(): IManagerKeys {
	async function createKey(token: string){
		try {
			await apiHzhong.post("/users/keys",{},{
				headers: {
					Authorization: `Bearer ${token}`
				}
			});
			return toast.success("Chave pix criada");
		} catch (error) {
			return toast.error(error.response.data.msg);
		}
	}
    
	async function deleteKey(token: string){
		try {
			await apiHzhong.delete("/users/keys",{
				headers: {
					Authorization: `Bearer ${token}`
				}
			});
			return toast.success("Chave pix excluida");
		} catch (error) {
			return toast.error(error.response.data.msg);
		}
	}

	return {
		createKey,
		deleteKey
	};
}