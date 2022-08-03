import classes from './MealsFilter.module.css';

const MealsFilter = (props) => {
	const filterHandler = (event) => {
		props.onFilterSubmit(event.target.value);
	};

	return (
		<div className={classes['meals-filter']}>
			<div className={classes['meals-filter__control']}>
				<label>Filter by type</label>
				<select onChange={filterHandler} value={props.filteredFoodType}>
					<option value="All">All</option>
					<option value="Vegetarian">Vegetarian</option>
					<option value="Non-Vegetarian">Non-Vegetarian</option>
				</select>
			</div>
		</div>
	);
};

export default MealsFilter;
