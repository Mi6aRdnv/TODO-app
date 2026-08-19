import Task from "./Task";
import type { TaskData, SetTasks } from "../App";

export default function TaskList({
	tasks,
	setTasks,
}: {
	tasks: TaskData[];
	setTasks: SetTasks;
}) {
	const taskList = tasks.map((task) => {
		return (
			<Task
				text={task.text}
				status={task.status}
				key={tasks.indexOf(task)}
				taskIndex={tasks.indexOf(task)}
				setTasks={setTasks}
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
					<p className="task-count">2 items left</p>
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
