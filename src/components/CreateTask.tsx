export default function CreateTask() {
	return (
		<form className="create-task-form task-form">
			<button type="button" className="checkbox">
				<img></img>
			</button>
			<input type="text" placeholder="Create a new todo..." />
		</form>
	);
}
