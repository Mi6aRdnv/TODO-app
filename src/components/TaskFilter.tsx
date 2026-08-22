export default function TaskFilter({
	filterTaskBy,
	setFilterTaskBy,
}: {
	filterTaskBy: string;
	setFilterTaskBy: React.Dispatch<React.SetStateAction<string>>;
}) {
	return (
		<div className="task-filter box">
			<button
				onClick={() => setFilterTaskBy("all")}
				type="button"
				className={filterTaskBy === "all" ? "filter filter--chosen" : "filter"}
			>
				All
			</button>
			<button
				onClick={() => setFilterTaskBy("active")}
				type="button"
				className={
					filterTaskBy === "active" ? "filter filter--chosen" : "filter"
				}
			>
				Active
			</button>
			<button
				onClick={() => setFilterTaskBy("completed")}
				type="button"
				className={
					filterTaskBy === "completed" ? "filter filter--chosen" : "filter"
				}
			>
				Completed
			</button>
		</div>
	);
}
