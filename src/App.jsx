import React from "react";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";

export default function App() {
	return (
		<div className={styles.container}>
			<Navbar />
			<Main />
		</div>
	);
}

