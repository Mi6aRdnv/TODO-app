import Task from "./Task";

export default function TaskList() {
	return (
		<>
			<ul className="task-list">
				<Task text="Finish homework" status="completed" />
				<Task text="Read a book" status="active" />

				<li className="box task-list-footer">
					<p className="task-count">2 items left</p>
					<button type="button" className="clear-completed-button">
						Clear Completed
					</button>
				</li>
			</ul>
		</>
	);
}
