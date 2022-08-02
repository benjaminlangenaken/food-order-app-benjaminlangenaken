import {useRef, useState} from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
	const [validAmount, setValidAmount] = useState(true);
	const amountInputRef = useRef();

	const submitHandler = (event) => {
		event.preventDefault();

		const enteredAmount = amountInputRef.current.value;

		// Make sure to get a number instead of a string value by adding +enteredAmount (Refs always return strings)
		const enteredAmountNum = +enteredAmount;

		if (enteredAmount.trim().length === 0) {
			setValidAmount(false);
			return;
		}

		setValidAmount(true);
		props.onAddToCart(enteredAmountNum);
	};

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<Input
				ref={amountInputRef}
				label="Quantity"
				input={{
					id: 'amount_' + props.id,
					type: 'number',
					min: '1',
					max: '10',
					step: '1',
					defaultValue: '1',
				}}
			/>
			<button>+ Add</button>
			{!validAmount && <p>Please enter a valid amount...</p>}
		</form>
	);
};

export default MealItemForm;
