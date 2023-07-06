import Link from "next/link";
import styles from "./_navbar.module.css";

export default function Navbar() {
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
