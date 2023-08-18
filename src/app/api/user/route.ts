import { kv } from "@vercel/kv";
import { cookies } from "next/headers";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
	const user: {
		username: string;
		password: string;
	} = await req.body;
	await kv.lpush("users", user);

	cookies().set("user", user.username);

	return NextResponse.json({
		message: "Hello",
	});
}
