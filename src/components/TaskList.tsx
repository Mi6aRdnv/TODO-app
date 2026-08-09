export default function TaskList() {
	return (
		<>
			<ul className="task-list">
				<li className="box">
					<button type="button" className="checkbox">
						<img></img>
					</button>
					<p className="task-text">Complete online JavaScript course</p>
					<button type="button" className="delete-task-button">
						<img src="src\assets\images\icon-cross.svg" alt="Delete task" />
					</button>
				</li>
				<li className="box">
					<button type="button" className="checkbox">
						<img></img>
					</button>
					<p className="task-text">take a break</p>
					<button type="button" className="delete-task-button">
						<img src="src\assets\images\icon-cross.svg" alt="Delete task" />
					</button>
				</li>
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
