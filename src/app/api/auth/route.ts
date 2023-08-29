import { apiHzhong } from "@/app/services/api";
import { NextRequest, NextResponse } from "next/server";

export async  function POST(request: NextRequest){
	const { username, password } = await request.json();

	try {
		const response = await apiHzhong.post("/users/sessions",{
			username,
			password,
		});

		const { params } = response.data;
		const { token } = params;

		const cookiesExpiresInSeconds = 60 * 60 * 8;

		const redirectURL = new URL("/dashboard", request.url);

		return NextResponse.redirect(redirectURL, {
			headers: {
				"Set-Cookie": `token=${token}; Path=/;max-age=${cookiesExpiresInSeconds};`,
			},
		});

	} catch (error) {
		console.log(error);
		return new Response(JSON.stringify({ error: "Login failed" }), {
			status: 401,
			headers: { "Content-Type": "application/json" },
		});
	}
    
}