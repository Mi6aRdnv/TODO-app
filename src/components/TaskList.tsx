import Task from "./Task";
import type { TaskData, SetTasks } from "../App";
import { useState } from "react";

export default function TaskList({
	tasks,
	setTasks,
}: {
	tasks: TaskData[];
	setTasks: SetTasks;
}) {
	const taskQuantity = tasks.reduce<number>(
		(acc, task) => (task.status === "active" ? acc + 1 : acc),
		0,
	);

	const [draggedIndex, setDraggedIndex] = useState<null | number>(null);

	const taskList = tasks.map((task) => {
		return (
			<Task
				text={task.text}
				status={task.status}
				key={tasks.indexOf(task)}
				taskIndex={tasks.indexOf(task)}
				setTasks={setTasks}
				draggedIndex={draggedIndex}
				setDraggedIndex={setDraggedIndex}
			/>
		);
	});

	function clearCompletedTask() {
		const newTasks = tasks.filter((task) => task.status !== "completed");
		localStorage.setItem("tasks", JSON.stringify(newTasks));
		setTasks(newTasks);
	}

	return (
		<>
			<ul className="task-list">
				{taskList}

				<li className="box task-list-footer">
					<p className="task-count">{taskQuantity} items left</p>
					<button
						onClick={clearCompletedTask}
						type="button"
						className="clear-completed-button"
					>
						Clear Completed
					</button>
				</li>
			</ul>
		</>
	);
}
