import {useContext, useEffect, useState} from 'react';
import CartContext from '../../context/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
	const [buttonAnimation, setButtonAnimation] = useState(false);

	const ctx = useContext(CartContext);

	const initialValue = 0;
	const amountCartItems = ctx.items.reduce((prevNumber, item) => {
		return prevNumber + item.amount;
	}, initialValue);

	const buttonClasses = `${classes.button} ${
		buttonAnimation && classes.bump
	}`;

	useEffect(() => {
		// Don't play animation if the Cart is empty
		if (ctx.items.length === 0) {
			return;
		}

		setButtonAnimation(true);

		const timer = setTimeout(() => {
			setButtonAnimation(false);
		}, 300);

		// Cleanup function
		return () => {
			clearTimeout(timer);
		};
	}, [ctx.items]);

	return (
		<button className={buttonClasses} onClick={props.onClick}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={classes.badge}>{amountCartItems}</span>
		</button>
	);
};

export default HeaderCartButton;
