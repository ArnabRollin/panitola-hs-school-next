"use client";

import styles from "./page.module.css";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
	const router = useRouter();

	async function useHandleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();

		const form: HTMLFormElement = document.querySelector("form#signup")!;

		const formData = new FormData(form);
		const formValues = Object.fromEntries(formData);

		const username = formValues.username.toString();
		const password = formValues.password.toString();

		await fetch("/api/user", {
			method: "POST",
			body: JSON.stringify({
				username: username,
				password: password,
			}),
			headers: {
				"content-type": "application/json",
			},
		});

		router.push("/");
	}

	return (
		<main className="main">
			<h1
				style={{
					marginBottom: "10px",
				}}
			>
				Signup form
			</h1>

			<form id="signup" onSubmit={useHandleSubmit}>
				<label htmlFor="#username">Username: </label>
				<input
					id="username"
					name="username"
					type="text"
					autoComplete="on"
					style={{
						padding: "5px",
					}}
					required
				/>
				<p className={styles.error} id="user-inv"></p>
				<label htmlFor="#password">Password: </label>
				<input
					id="password"
					name="password"
					type="password"
					autoComplete="on"
					style={{
						padding: "5px",
					}}
					required
				/>
				<p className={styles.error} id="pass-inv"></p>

				<button type="submit" className={styles.submit}>
					Submit
				</button>
			</form>
		</main>
	);
}
