import { kv } from "@vercel/kv";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
	interface User {
		username: string;
		password: string;
	}
	interface Command {
		command: string;
	}

	const body: User | Command = await req.json();

	if ("command" in body) {
		switch (body.command) {
			case "logout":
				cookies().set("user", "");
			default:
				cookies().set("user", "");
		}
	} else {
		if (!body) return;

		await kv.lpush("users", body);

		cookies().set("user", body.username);
	}

	return NextResponse.json({
		message: "Hello",
	});
}

export function GET(req: NextRequest, res: NextResponse) {
	return NextResponse.json(cookies().get("user")?.value);
}
