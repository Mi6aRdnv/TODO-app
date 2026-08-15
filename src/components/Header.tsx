import { useState } from "react";

export default function Header() {
	const [theme, setTheme] = useState<"night" | "day">("night");
	document.documentElement.setAttribute("data-theme", theme);
	function toggleTheme() {
		setTheme(theme === "night" ? "day" : "night");
		document.documentElement.setAttribute("data-theme", theme);
	}
	return (
		<header className="header">
			<h1 className="title">TODO</h1>
			<button className="theme-toggle" onClick={toggleTheme}>
				<img
					src={
						theme === "night"
							? "src\\assets\\images\\icon-sun.svg"
							: "src\\assets\\images\\icon-moon.svg"
					}
					className={`theme-icon ${theme === "night" ? "night" : "day"}`}
					alt="Toggle theme"
				/>
			</button>
		</header>
	);
}
