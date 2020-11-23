import { createSlice } from '@reduxjs/toolkit'


const initialState = {
	initialized: false,
	error: null,
	activePage: null,
}


const slice = createSlice({
	name: `app`,
	initialState,
	reducers: {
		initializedSuccess(state) {
			state.initialized = true
		},
		setError(state, action) {
			state.error = action.payload
		},
		setActivePage(state, action) {
			state.activePage = action.payload
		},
	}
})


export const {
	initializedSuccess,
	setError,
	setActivePage,
} = slice.actions


export default slice.reducer