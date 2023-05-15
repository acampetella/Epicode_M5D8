import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAddCommentOpen: false
}

const commentListSlice = createSlice({
    name: 'toggleAddCommentOpen',
    initialState,
    reducers: {
        addCommentClose: (state) => {
            state.isAddCommentOpen = false
        },
        addCommentOpen: (state) => {
            state.isAddCommentOpen = true
        }
    }
})

export const isAddCommentOpen = (state) => state.commentListState.isAddCommentOpen
export const {addCommentClose, addCommentOpen} = commentListSlice.actions
export default commentListSlice.reducer