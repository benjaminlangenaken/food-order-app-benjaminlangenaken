import {useState} from 'react';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';
import MealsFilter from './MealsFilter';

const DUMMY_MEALS = [
	{
		id: 'm1',
		name: 'Sushi sashimi bowl',
		description: 'Finest fish and veggies',
		price: 22.99,
		type: 'Vegetarian',
	},
	{
		id: 'm2',
		name: 'Saltimbocca alla Romana',
		description: 'An Italian classic!',
		price: 28.5,
		type: 'Non-Vegetarian',
	},
	{
		id: 'm3',
		name: 'BBQ Burger',
		description: 'American, raw, meaty',
		price: 12.99,
		type: 'Non-Vegetarian',
	},
	{
		id: 'm4',
		name: 'Green Poké',
		description: 'Healthy vegetarian dish',
		price: 14.99,
		type: 'Vegetarian',
	},
];

const AvailableMeals = () => {
	const [filteredType, setFilteredType] = useState('All');

	const filterSubmitHandler = (selectedType) => {
		setFilteredType(selectedType);
	};

	let filteredMeals;
	if (filteredType === 'All') {
		filteredMeals = DUMMY_MEALS;
	} else {
		filteredMeals = DUMMY_MEALS.filter((meal) => {
			return meal.type === filteredType;
		});
	}

	const mealsList = filteredMeals.map((meal) => (
		<MealItem
			key={meal.id}
			id={meal.id}
			name={meal.name}
			description={meal.description}
			price={meal.price}
			type={meal.type}
		/>
	));
	return (
		<section className={classes.meals}>
			<Card>
				<MealsFilter
					onFilterSubmit={filterSubmitHandler}
					filteredFoodType={filteredType}
				/>
				<ul>{mealsList}</ul>
			</Card>
		</section>
	);
};

export default AvailableMeals;
