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
	reducers: {},
});

export default cartSlice.reducer;
