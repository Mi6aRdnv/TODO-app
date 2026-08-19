import type { Status, TaskData, SetTasks } from "../App";

export default function Task({
	text,
	status,
	taskIndex,
	setTasks,
}: {
	text: string;
	status: Status;
	taskIndex: number;
	setTasks: SetTasks;
}) {
	function toggleTaskStatus() {
		const newStatus = status === "active" ? "completed" : "active";
		const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
		const newTasks = tasks.map((task: TaskData, index: number) =>
			index === taskIndex ? { ...task, status: newStatus } : task,
		);

		localStorage.setItem("tasks", JSON.stringify(newTasks));
		setTasks(newTasks);
	}

	return (
		<li className="box">
			<button
				type="button"
				className={
					status === "completed" ? "checkbox--completed checkbox" : "checkbox"
				}
				onClick={toggleTaskStatus}
			>
				{status === "completed" && (
					<img src="/src/assets/images/icon-check.svg" alt="Check" />
				)}
			</button>
			<p
				className={
					status === "completed"
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
