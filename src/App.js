import {useState} from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
	const [cartVisible, setCartVisible] = useState(false);

	const showCartHandler = () => {
		setCartVisible(true);
	};

	const hideCartHandler = () => {
		setCartVisible(false);
	};

	return (
		<>
			{cartVisible && <Cart onHideCart={hideCartHandler} />}
			<Header onShowCart={showCartHandler} />
			<main>
				<Meals />
			</main>
		</>
	);
}

export default App;
