import styles from "./page.module.css";
import Link from "next/link";
import { cookies } from "next/headers";

export default function Home() {
	const user = cookies().get("user")?.value;

	function getUsername(): { text: string } {
		return { text: !!user ? ", " + user : "" };
	}

	return (
		<main className="main">
			<div id="welcome-div">
				<h1>
					Welcome to Panitola H.S. School&apos;s homepage
					{getUsername().text}
				</h1>
				<h2>
					{!!user ? (
						<Link className="link" href="/">
							Explore!
						</Link>
					) : (
						<>
							<Link className="link" href="/login">
								Login
							</Link>{" "}
							or{" "}
							<Link className="link" href="/signup">
								Signup
							</Link>
						</>
					)}
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
