import classes from './MealsFilter.module.css';

const MealsFilter = (props) => {
	const filterTypeHandler = (event) => {
		props.onFilterTypeSubmit(event.target.value);
	};

	const filterWarmthHandler = (event) => {
		props.onFilterWarmthSubmit(event.target.value);
	};

	return (
		<div className={classes.meals__filter}>
			<div className={classes['filter-section']}>
				<h3>Diet</h3>
				<select
					onChange={filterTypeHandler}
					value={props.filteredFoodType}
				>
					<option value="All Types">All Types</option>
					<option value="Vegetarian">Vegetarian</option>
					<option value="Non-Vegetarian">Non-Vegetarian</option>
				</select>
			</div>

			<div className={classes['filter-section']}>
				<h3>Hot or Cold?</h3>
				<select
					onChange={filterWarmthHandler}
					value={props.filteredFoodWarmth}
				>
					<option value="Hot and Cold">Hot and Cold</option>
					<option value="Hot">Hot</option>
					<option value="Cold">Cold</option>
				</select>
			</div>

			{/* <div className={classes['filter-section']}>
				<h3>Ingredients</h3>
				<div>
					<button>Beef</button>
					<button>Rice</button>
					<button>Salmon</button>
					<button>Veal</button>
					<button>Prosciutto</button>
					<button>Onion</button>
					<button>Spinach</button>
				</div>
			</div> */}
		</div>
	);
};

export default MealsFilter;
