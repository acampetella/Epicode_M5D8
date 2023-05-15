import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
  isLoading: false,
  error: "",
  updateOperation: false
}

export const getCommentsFromBook = createAsyncThunk(
  "comments/getCommentsFromBook",
  async (asin) => {
    try {
      const data = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${asin}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJkYTdlMWIxNGE1MTAwMTQ2NjNmZmYiLCJpYXQiOjE2ODM0ODAyODgsImV4cCI6MTY4NDY4OTg4OH0.81Ws6gOdfkPIkoP8Lhv5qGYuXV6F9HXHx3Edf5xDcMo"
          }
        }
      )
      const response = await data.json()
      return response
    } catch (error) {
      if (error) {
        throw new Error("Errore nella ricezione dei dati")
      }
    }
  }
);

const commentsSlice = createSlice({
  name: "getCommentsFromBook",
  initialState,
  reducers: {
    updateToTrue: (state) => {
      state.updateOperation = true
    },
    updateToFalse: (state) => {
      state.updateOperation = false
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCommentsFromBook.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getCommentsFromBook.fulfilled, (state, action) => {
        state.isLoading = false
        state.comments = action.payload
      })
      .addCase(getCommentsFromBook.rejected, (state) => {
        state.isLoading = false
        state.error = "Errore nella ricezione dei dati"
      });
  },
});

export const commentAreaLoading = (state) => state.commentAreaState.isLoading
export const bookComments = (state) => state.commentAreaState.comments
export const commentAreaError = (state) => state.commentAreaState.error
export const commentAreaUpdate = (state) => state.commentAreaState.updateOperation
export const {updateToTrue, updateToFalse} = commentsSlice.actions
export default commentsSlice.reducer
