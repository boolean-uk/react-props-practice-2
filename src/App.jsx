import { useState } from "react";

import Chat from "./components/Chat";
import Title from "./components/Title";

import "./App.css";

export default function App() {
	const [user] = useState("Nicolas");

	return (
		<div className="app">
			<Title user={user} />
			<Chat user={user} />
		</div>
	);
}
