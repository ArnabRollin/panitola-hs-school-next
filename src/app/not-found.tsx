import styles from "./not-found.module.css";

export default function NotFound() {
	return (
		<div className={"main " + styles.main}>
			<div className={styles.errDiv}>
				<h1>Page not found</h1>
				<h2>Maybe there is a typo in the URL?</h2>
			</div>
			<a
				href="/"
				style={{
					fontWeight: "bold",
					fontSize: "xx-large",
				}}
			>
				Go to homepage
			</a>
		</div>
	);
}
