export default function TaskList() {
	return (
		<>
			<ul className="task-list">
				<li>
					<button type="button" className="checkbox">
						<img></img>
					</button>
					<p>Complete online JavaScript course</p>
					<button type="button" className="delete">
						<img src="src\assets\images\icon-cross.svg" alt="Delete task" />
					</button>
				</li>
				<li>
					<button type="button" className="checkbox">
						<img></img>
					</button>
					<p>take a break</p>
					<button type="button" className="delete">
						<img src="src\assets\images\icon-cross.svg" alt="Delete task" />
					</button>
				</li>
			</ul>
			<p className="task-count">2 items left</p>
			<button type="button" className="clear-completed">
				Clear Completed
			</button>
		</>
	);
}
