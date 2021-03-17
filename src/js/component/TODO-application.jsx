import React, { useState } from "react";

export function TODO() {
	const [currentTodo, setCurrentTodo] = useState("");
	const [list, setList] = useState([
		{ label: "make the bed", done: true },
		{ label: "Wash my hand", done: false },
		{ label: "Eat", done: false },
		{ label: "Walk the dog", done: false }
	]);

	const handleKeyPress = e => {
		if (e.key === "Enter") {
			setList(list.concat({ label: currentTodo, done: false }));
			setCurrentTodo("");
		}
	};

	const deleteTodo = index => setList(list.filter((item, i) => i !== index));

	const handleCompleteTodo = index => {
		let newList = [].concat(list);
		newList[index].done = !newList[index].done;

		setList(newList);
	};

	return (
		<div className="d-flex flex-column align-items-center justify-content-center wrap">
			<h1 className="mb-4">TODO application</h1>
			<div className="todo-container">
				<ul className="list-group">
					<li className="list-group-item">
						{/* field for entering new todo */}
						<input
							className="form-control border-0"
							type="text"
							placeholder="What would you like accomplish today?"
							aria-label="add todo"
							value={currentTodo}
							onChange={e => setCurrentTodo(e.target.value)}
							onKeyPress={e => handleKeyPress(e)}
						/>
					</li>
					{// some mapping
					list.map((item, index) => (
						<li className="list-group-item" key={index}>
							{item.label}
							<span
								className="delete ml-auto"
								onClick={() => deleteTodo(index)}>
								&#10007;
							</span>
						</li>
					))}
				</ul>
				<div className="list-group-item footer">
					{list.length > 0
						? `${list.length} item${
								list.length > 1 ? "s" : ""
						  } left`
						: "All Caught Up!"}
				</div>
			</div>
		</div>
	);
}
