import { apiHzhong } from "@/app/services/api";

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
		} catch (error) {
			console.log(error);
		}
	}
    
	async function deleteKey(token: string){
		try {
			await apiHzhong.delete("/users/keys",{
				headers: {
					Authorization: `Bearer ${token}`
				}
			});
		} catch (error) {
			console.log(error);
		}
	}

	return {
		createKey,
		deleteKey
	};
}