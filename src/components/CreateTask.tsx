export default function CreateTask() {
	return (
		<form className="create-task-form box">
			<button type="button" className="checkbox create-task-checkbox">
				<img src="/src/assets/images/icon-check.svg" alt="Check" />
			</button>
			<input
				className="create-task-input"
				type="text"
				placeholder="Create a new todo..."
			/>
		</form>
	);
}
