import {useState} from 'react';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';
import MealsFilter from './MealsFilter';

const DUMMY_MEALS = [
	{
		id: 'm1',
		name: 'Carpaccio',
		description: 'Classic Italian starter',
		price: 17.99,
		type: 'Non-Vegetarian',
		warmth: 'Cold',
	},
	{
		id: 'm2',
		name: 'Sushi sashimi bowl',
		description: 'Finest fish and veggies',
		price: 19.99,
		type: 'Vegetarian',
		warmth: 'Cold',
	},
	{
		id: 'm3',
		name: 'Saltimbocca alla Romana',
		description: 'Roman-style veal cutlets',
		price: 28.5,
		type: 'Non-Vegetarian',
		warmth: 'Hot',
	},
	{
		id: 'm4',
		name: 'BBQ Burger',
		description: 'American, raw, meaty',
		price: 14.99,
		type: 'Non-Vegetarian',
		warmth: 'Hot',
	},
	{
		id: 'm5',
		name: 'Green Poké',
		description: 'Healthy vegetarian dish',
		price: 11.99,
		type: 'Vegetarian',
		warmth: 'Cold',
	},
];

const AvailableMeals = () => {
	const [filteredType, setFilteredType] = useState('All Types');
	const [filteredWarmth, setFilteredWarmth] = useState('Hot and Cold');

	const filterTypeSubmitHandler = (selectedType) => {
		setFilteredType(selectedType);
	};

	const filterWarmthSubmitHandler = (selectedWarmth) => {
		setFilteredWarmth(selectedWarmth);
	};

	let filteredMeals;
	if (filteredType === 'All Types' && filteredWarmth === 'Hot and Cold') {
		filteredMeals = DUMMY_MEALS;
	} else if (filteredType === 'All Types') {
		filteredMeals = DUMMY_MEALS.filter((meal) => {
			return meal.warmth === filteredWarmth;
		});
	} else if (filteredWarmth === 'Hot and Cold') {
		filteredMeals = DUMMY_MEALS.filter((meal) => {
			return meal.type === filteredType;
		});
	} else {
		filteredMeals = DUMMY_MEALS;
		filteredMeals = DUMMY_MEALS.filter((meal) => {
			return meal.type === filteredType && meal.warmth === filteredWarmth;
		});
	}

	const mealsList = filteredMeals.map((meal) => (
		// const mealsList = DUMMY_MEALS.map((meal) => (
		<MealItem
			key={meal.id}
			id={meal.id}
			name={meal.name}
			description={meal.description}
			price={meal.price}
			type={meal.type}
			warmth={meal.warmth}
		/>
	));
	return (
		<section className={classes.meals}>
			<Card>
				<MealsFilter
					onFilterTypeSubmit={filterTypeSubmitHandler}
					filteredFoodType={filteredType}
					onFilterWarmthSubmit={filterWarmthSubmitHandler}
					filteredFoodWarmth={filteredWarmth}
				/>
				<ul>{mealsList}</ul>
			</Card>
		</section>
	);
};

export default AvailableMeals;
