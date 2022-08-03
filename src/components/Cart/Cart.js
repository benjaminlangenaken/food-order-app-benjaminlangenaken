import {useContext} from 'react';
import CartContext from '../../context/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
	const ctx = useContext(CartContext);

	// const addToCartHandler = (item) => {
	// 	ctx.addItem({
	// 		id: props.id,
	// 		name: props.name,
	// 		amount: props.amount,
	// 		price: props.price,
	// 	});
	// };

	// const removeFromCartHandler = (id) => {
	// 	ctx.removeItem({
	// 		id: props.id,
	// 		name: props.name,
	// 		amount: props.amount,
	// 		price: props.price,
	// 	});
	// };

	const cartItems = ctx.items.map((item) => (
		<CartItem
			key={item.id}
			name={item.name}
			amount={item.amount}
			price={item.price}
			// We need to pass an anonymous function as a prop so we can also add arguments to addToCartHandler and removeFromCartHandler
			// onAdd={() => {
			// 	addToCartHandler(item.id);
			// }}
			// onRemove={() => {
			// 	removeFromCartHandler(item);
			// }}
		/>
	));

	const totalPrice = `€ ${ctx.totalAmount.toFixed(2)}`;

	const hasItems = ctx.items.length > 0;

	return (
		<Modal onClick={props.onHideCart}>
			<ul className={classes['cart-items']}>{cartItems}</ul>
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>{totalPrice}</span>
			</div>
			<div className={classes.actions}>
				<button
					className={classes['button--alt']}
					onClick={props.onHideCart}
				>
					Close
				</button>
				{hasItems && (
					<button className={classes['button']}>Order</button>
				)}
			</div>
		</Modal>
	);
};

export default Cart;
