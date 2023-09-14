import { apiHzhong } from "@/app/services/api";
import cookies from "js-cookie";
import { toast } from "react-toastify";

export function useSessions(){
	async function sessionsUser(username: string , password: string ): Promise<string | boolean>{
		try {
			const response = await apiHzhong.post("/users/sessions",{
				username,
				password,
			});
    
			const { params } = response.data;
			const { token } = params;
			cookies.set("token", token, { expires: 8 / 24 });
			return token;
		} catch (error) {
			if(error.response.data.error.msg){
    		    toast.error(error.response.data.error.msg);
				return false;
    		}
    		toast.error("Internal Server Error");
			return false;
		}
		
	}

	return {
		sessionsUser,
	};
}