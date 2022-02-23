function ActivityButton({ item, handleChooseEvent }) {
	return (
		<button
			className="col-4 activity_item"
			type="button"
			value={item.value}
			onClick={(e) => handleChooseEvent(e.target.value)}
		>
			{item.icon}
			{item.value}
		</button>
	);
}

export default ActivityButton;
