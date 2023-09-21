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
	},
});

export const { clearCart, removeItem, increase, decrease } = cartSlice.actions;
export default cartSlice.reducer;
