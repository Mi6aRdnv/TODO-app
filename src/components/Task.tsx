import type { Status, TaskData, SetTasks } from "../App";

export default function Task({
	text,
	status,
	taskIndex,
	setTasks,
	draggedIndex,
	setDraggedIndex,
}: {
	text: string;
	status: Status;
	taskIndex: number;
	setTasks: SetTasks;
	draggedIndex: null | number;
	setDraggedIndex: React.Dispatch<React.SetStateAction<null | number>>;
}) {
	function updateTasks(newTasks: TaskData[]) {
		localStorage.setItem("tasks", JSON.stringify(newTasks));
		setTasks(newTasks);
	}

	function toggleTaskStatus() {
		const newStatus = status === "active" ? "completed" : "active";
		const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
		const newTasks = tasks.map((task: TaskData, index: number) =>
			index === taskIndex ? { ...task, status: newStatus } : task,
		);

		updateTasks(newTasks);
	}
	function deleteTask() {
		const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
		const newTasks = tasks.filter(
			(_task: TaskData, index: number) => index !== taskIndex,
		);

		updateTasks(newTasks);
	}
	function handleDrop(targetIndex: number) {
		if (draggedIndex === null) return;

		const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
		const newTasks = [...tasks];
		const [draggedTask] = newTasks.splice(draggedIndex, 1);
		newTasks.splice(targetIndex, 0, draggedTask);

		updateTasks(newTasks);
	}

	return (
		<li
			draggable
			onDragStart={() => setDraggedIndex(taskIndex)}
			onDrop={() => handleDrop(taskIndex)}
			onDragOver={(event) => event.preventDefault()}
			className="box"
		>
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
			<button onClick={deleteTask} type="button" className="delete-task-button">
				<img src="/src/assets/images/icon-cross.svg" alt="Delete task" />
			</button>
		</li>
	);
}
