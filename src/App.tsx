import "./App.css";
import Header from "./components/Header";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";

function App() {
	return (
		<div className="container">
			<Header />
			<CreateTask />
			<TaskList />
			<TaskFilter />
			<p className="drag-instructions">Drag and drop to reorder list</p>
		</div>
	);
}

export default App;
