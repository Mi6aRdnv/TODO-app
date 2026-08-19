import { useState, useRef } from "react";
import type { TaskData, SetTasks } from "../App";

export default function CreateTask({
	tasks,
	setTasks,
}: {
	tasks: TaskData[];
	setTasks: SetTasks;
}) {
	const [taskStatus, setTaskStatus] = useState<"active" | "completed">(
		"active",
	);
	const inputTextRef = useRef<HTMLInputElement>(null);
	function toggleTaskStatus() {
		setTaskStatus(taskStatus === "active" ? "completed" : "active");
	}

	function addTask(event: React.SubmitEvent<HTMLFormElement>) {
		event.preventDefault();
		if (inputTextRef.current === null || inputTextRef.current.value === "") {
			return;
		}

		const newTasks = [
			...tasks,
			{ text: inputTextRef.current.value, status: taskStatus },
		];
		localStorage.setItem("tasks", JSON.stringify(newTasks));
		// }
		inputTextRef.current.value = "";
		setTasks(newTasks);
	}

	return (
		<form className="create-task-form box" onSubmit={addTask}>
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
			<input
				ref={inputTextRef}
				className={
					taskStatus === "completed"
						? "task-text--completed create-task-input"
						: "create-task-input"
				}
				type="text"
				placeholder="Create a new todo..."
				autoFocus
			/>
		</form>
	);
}
