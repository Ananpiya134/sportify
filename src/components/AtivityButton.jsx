function ActivityButton({ item, handleChooseEvent }) {
	return (
		<button
			className="col-4 activity_item"
			type="button"
			name={item.name}
			value={item.id}
			onClick={(e) => handleChooseEvent(e.target.name, Number(e.target.value))}
		>
			<i className={`${item.icon} mb-2 `} />
			{item.name}
		</button>
	);
}

export default ActivityButton;
