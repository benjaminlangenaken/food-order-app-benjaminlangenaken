import classes from './MealsSummary.module.css';

const MealsSummary = () => {
	return (
		<section className={classes.summary}>
			<h2>Delicious Food, Delivered At Your Doorstep</h2>
			<p>
				Pick your favourite dish, and enjoy a tasty lunch or dinner from
				the comfort of your home.
			</p>
			<p>
				All our dishes are prepared with the highest-quality
				ingredients, creating flavors that can only be achieved through
				proper preparation and care. Every ingredient originates from
				qualified and/or certified suppliers.
			</p>
		</section>
	);
};

export default MealsSummary;
