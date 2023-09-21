import { useEffect } from 'react';
import './App.css';
import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotal } from './features/cart/CartSlice';

function App() {
	const { cartItems } = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(calculateTotal());
	}, [cartItems]);
	return (
		<main>
			<Navbar />
			<CartContainer />
		</main>
	);
}

export default App;
