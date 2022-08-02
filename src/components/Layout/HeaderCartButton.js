import {useContext} from 'react';
import CartContext from '../../context/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
	const ctx = useContext(CartContext);

	const initialValue = 0;
	const amountCartItems = ctx.items.reduce((prevNumber, item) => {
		return prevNumber + item.amount;
	}, initialValue);

	return (
		<button className={classes.button} onClick={props.onClick}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={classes.badge}>{amountCartItems}</span>
		</button>
	);
};

export default HeaderCartButton;
