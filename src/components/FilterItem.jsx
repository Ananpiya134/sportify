function FilterItem({ item, handleCancelFilter }) {
	return (
		<button
			className={` col-3 filter_item d-flex align-items-center justify-content-around my-2`}
		>
			<p style={{ fontSize: "12px" }}>{item}</p>
			<i
				className={`fa-solid fa-circle-xmark`}
				type="button"
				onClick={() => handleCancelFilter(item)}
			/>
		</button>
	);
}
export default FilterItem;
