import classes from './Header.module.css';

import foodImage from '../../assets/food.jpg';

const Header = (props) => {
	return (
		<>
			<header className={classes.header}>
				<h1>React Eats</h1>
				<button>Cart</button>
			</header>
			<div className={classes['main-image']}>
				<img src={foodImage} alt="A table full of delicious food!" />
			</div>
		</>
	);
};

export default Header;
