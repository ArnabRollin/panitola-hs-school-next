"use client";

import Link from "next/link";
import styles from "./_navbar.module.css";

export default function Navbar() {
	// const userExists = !!cookies().get("user")?.value;
	const userExists = true;

	async function logout() {
		await fetch("/api/user", {
			method: "POST",
			body: "logout",
			headers: {
				"content-type": "application/json",
			},
		});

		window.location.replace("/");
	}

	return (
		<>
			<nav className={styles.nav}>
				<ul className={styles.ul}>
					<li className={styles.li}>
						<Link href="/" className={styles.a + " " + styles.active}>
							Home
						</Link>
					</li>
					<li className={styles.li}>
						<Link href="/blogs" className={styles.a}>
							Blogs
						</Link>
					</li>
					<li className={styles.li}>
						<Link href="/contact" className={styles.a}>
							Contact
						</Link>
					</li>
					{userExists ? null : (
						<Link href="/login">
							<button
								id="login-btn"
								style={{
									backgroundColor: "red",
								}}
							>
								Login
							</button>
						</Link>
					)}
					{userExists ? null : (
						<Link href="/signup">
							<button
								id="signup-btn"
								style={{
									backgroundColor: "green",
								}}
							>
								Sign Up
							</button>
						</Link>
					)}
					{!userExists ? null : (
						<button
							id="logout-btn"
							onClick={logout}
							style={{
								backgroundColor: "red",
							}}
						>
							Log Out
						</button>
					)}
				</ul>
			</nav>
			<div
				style={{
					marginBottom: "50px",
				}}
			></div>
		</>
	);
}
