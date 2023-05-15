import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    term: ''
}

const navSlice = createSlice({
    name: 'setTerm',
    initialState,
    reducers: {
        setTerm: {
            reducer: (state, action) => {
                state.term = action.payload
            },
            prepare: (text) => {
                return {payload: text}
            }
        }
    }
})

export const navTerm = (state) => state.navState.term
export const {setTerm} = navSlice.actions
export default navSlice.reducer