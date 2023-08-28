import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async  function GET(request: NextRequest){
	try {
		const { searchParams } = new URL(request.url); 
		const name = searchParams.get("search");
		const cookie = cookies().get(name);
		return NextResponse.json({ cookie: cookie?cookie:"" });
	} catch (error) {
		return new Response(JSON.stringify({ error: "Cookie failed" }), {
			status: 401,
			headers: { "Content-Type": "application/json" },
		});
	}
    
}