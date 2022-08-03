import {useReducer} from 'react';
import CartContext from './cart-context';

const defaultCartState = {
	items: [],
	totalAmount: 0,
};

const cartReducer = (state, action) => {
	if (action.type === 'ADD_ITEM') {
		// Check if an item is already inside of the Cart
		// --> Because then the new item quantity should be added to the existing quantity
		const existingCartItemIndex = state.items.findIndex(
			(item) => item.id === action.item.id
		);
		const existingCartItem = state.items[existingCartItemIndex];
		let updatedItems;

		if (existingCartItem) {
			const updatedItem = {
				...existingCartItem,
				amount: existingCartItem.amount + action.item.amount,
			};
			updatedItems = [...state.items];
			updatedItems[existingCartItemIndex] = updatedItem;
		} else {
			// We use the array concat method because we want to create a new array without altering the old one
			updatedItems = state.items.concat(action.item);
		}

		const updatedTotalAmount =
			state.totalAmount + action.item.price * action.item.amount;
		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		};
	}
	if (action.type === 'REMOVE_ITEM') {
		// We use the array concat method because we want to create a new array without altering the old one
		const updatedItems = state.items.concat(action.item);
		const updatedTotalAmount =
			state.totalAmount + action.item.price * action.item.amount;
		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		};
	}
	return defaultCartState;
};

const CartProvider = (props) => {
	const [cartState, dispatchCartAction] = useReducer(
		cartReducer,
		defaultCartState
	);

	const addItem = (item) => {
		dispatchCartAction({
			type: 'ADD_ITEM',
			item: item,
		});
	};

	const removeItem = (id) => {
		dispatchCartAction({
			type: 'REMOVE_ITEM',
			id: id,
		});
	};

	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItem,
		removeItem: removeItem,
	};

	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartProvider;
