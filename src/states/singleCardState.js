import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    asinSelected: ''
}

const singleCardSlice = createSlice({
    name: 'setAsinSelected',
    initialState,
    reducers: {
        setAsinSelected: {
            reducer: (state, action) => {
                state.asinSelected = action.payload
            },
            prepare: (text) => {
                return {payload: text}
            }
        }
    }
})

export const asinSelected = (state) => state.singleCardState.asinSelected
export const {setAsinSelected} = singleCardSlice.actions
export default singleCardSlice.reducer