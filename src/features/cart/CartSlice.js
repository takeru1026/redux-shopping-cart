import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems';

// 買い物カゴの初期化
const initialState = {
	cartItems: cartItems,
	amount: 4,
	total: 0,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		clearCart: (state) => {
			// state.cartItems = [];
			return { cartItems: [], amount: 0, total: 0 };
		},
		removeItem: (state, action) => {
			const itemId = action.payload;
			state.cartItems = state.cartItems.filter(
				(cartItem) => cartItem.id !== itemId
			);
		},
		increase: (state, action) => {
			const cartItems = state.cartItems.find(
				(item) => item.id === action.payload
			);
			cartItems.amount = cartItems.amount + 1;
		},
		decrease: (state, action) => {
			const cartItems = state.cartItems.find(
				(item) => item.id === action.payload
			);
			cartItems.amount = cartItems.amount - 1;
		},
		calculateTotal: (state) => {
			let amount = 0;
			let total = 0;
			state.cartItems.forEach((item) => {
				amount += item.amount;
				total += item.amount * item.price;
			});
			state.amount = amount;
			state.total = total;
		},
	},
});

export const { clearCart, removeItem, increase, decrease, calculateTotal } =
	cartSlice.actions;
export default cartSlice.reducer;
