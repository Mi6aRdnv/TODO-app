export default function TaskFilter() {
	return (
		<div className="task-filter box">
			<button type="button" className="filter">
				All
			</button>
			<button type="button" className="filter">
				Active
			</button>
			<button type="button" className="filter">
				Completed
			</button>
		</div>
	);
}
