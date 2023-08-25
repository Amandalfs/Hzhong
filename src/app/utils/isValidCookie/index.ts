import axios from "axios";

export async function isValidCookie(name: string): Promise<boolean>{
	try {
		const { data } = await axios.get(`/api/cookies?search=${name}`);
		return data.cookie?true:false;
	} catch (error) {
		console.log("Error cookie", error);
	}
}