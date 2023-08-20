import { kv } from "@vercel/kv";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
	const user: {
		username: string;
		password: string;
	} = await req.json();

	if (!user) return;

	await kv.lpush("users", user);

	cookies().set("user", user.username);

	return NextResponse.json({
		message: "Hello",
	});
}
