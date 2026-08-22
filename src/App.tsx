import "./App.css";
import Header from "./components/Header";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";
import { useState } from "react";

export type Status = "active" | "completed";
export type TaskData = {
	text: string;
	status: Status;
};
export type SetTasks = React.Dispatch<React.SetStateAction<TaskData[]>>;

function App() {
	if (localStorage.getItem("tasks") === null) {
		localStorage.setItem("tasks", JSON.stringify([]));
	}

	const [tasks, setTasks] = useState<TaskData[]>(
		JSON.parse(localStorage.getItem("tasks") as string),
	);
	const [filterTaskBy, setFilterTaskBy] = useState<string>("all");
	return (
		<div className="container">
			<Header />
			<CreateTask tasks={tasks} setTasks={setTasks} />
			<TaskList tasks={tasks} setTasks={setTasks} filterTaskBy={filterTaskBy} />
			<TaskFilter
				filterTaskBy={filterTaskBy}
				setFilterTaskBy={setFilterTaskBy}
			/>
			<p className="drag-instructions">Drag and drop to reorder list</p>
		</div>
	);
}

export default App;
