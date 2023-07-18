import { kv } from "@vercel/kv";

// import styles from "./page.module.css";
import Link from "next/link";

export default async function Home() {
	async function getUsername(): Promise<{ text: string }> {
		await kv.hset("user:me", { helloa: "kirar" });
		// const user = await kv.hgetall("user:me");

		return { text: (await kv.hget("user:me", "helloa")) || "" };
	}

	return (
		<main className="main">
			<div id="welcome-div">
				<h1>
					Welcome to Panitola H.S. School&apos;s homepage,{" "}
					{(await getUsername()).text}
				</h1>
				<h2>
					<Link className="link" href="/">
						Explore!
					</Link>
				</h2>
			</div>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem,
				voluptatibus deleniti quod id esse corrupti beatae autem, quos
				repellendus eveniet minus, quidem at accusamus! Nisi, voluptates.
				Dolores repellat id fugiat.
			</p>
		</main>
	);
}
