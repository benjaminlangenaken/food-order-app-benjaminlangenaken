import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {
	const cartItems = [
		{id: 'c1', name: 'placeholder food', amount: 2, price: 20},
	].map((item) => <li>{item.name}</li>);

	return (
		<Modal onClick={props.onHideCart}>
			<ul className={classes['cart-items']}>{cartItems}</ul>
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>40</span>
			</div>
			<div className={classes.actions}>
				<button
					className={classes['button--alt']}
					onClick={props.onHideCart}
				>
					Close
				</button>
				<button className={classes['button']}>Order</button>
			</div>
		</Modal>
	);
};

export default Cart;
