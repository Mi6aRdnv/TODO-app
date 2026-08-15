import { useState } from "react";

export default function Task({
	text,
	status,
}: {
	text: string;
	status: "active" | "completed";
}) {
	const [taskStatus, setTaskStatus] = useState<"active" | "completed">(status);
	function toggleTaskStatus() {
		setTaskStatus(taskStatus === "active" ? "completed" : "active");
	}
	return (
		<li className="box">
			<button
				type="button"
				className={
					taskStatus === "completed"
						? "checkbox--completed checkbox"
						: "checkbox"
				}
				onClick={toggleTaskStatus}
			>
				{taskStatus === "completed" && (
					<img src="/src/assets/images/icon-check.svg" alt="Check" />
				)}
			</button>
			<p
				className={
					taskStatus === "completed"
						? "task-text--completed create-task-input"
						: "create-task-input"
				}
			>
				{text}
			</p>
			<button type="button" className="delete-task-button">
				<img src="/src/assets/images/icon-cross.svg" alt="Delete task" />
			</button>
		</li>
	);
}
