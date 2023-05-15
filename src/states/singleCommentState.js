import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: "",
  showConfirmWindow: false
}

export const deleteComment = createAsyncThunk(
  "delete/deleteComment",
  async (comment_id) => {
    try {
      const data = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${comment_id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJkYTdlMWIxNGE1MTAwMTQ2NjNmZmYiLCJpYXQiOjE2ODM0ODAyODgsImV4cCI6MTY4NDY4OTg4OH0.81Ws6gOdfkPIkoP8Lhv5qGYuXV6F9HXHx3Edf5xDcMo",
          },
          method: "DELETE",
        }
      )
      const response = await data.json()
      return response
    } catch (error) {
      if (error) {
        throw new Error("Errore nella ricezione dei dati");
      }
    }
  }
)

const singleCommentSlice = createSlice({
  name: "deleteComment",
  initialState,
  reducers: {
    openConfirmWindow: (state) => {
      state.showConfirmWindow = true
    },
    closeConfirmWindow: (state) => {
      state.showConfirmWindow = false
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteComment.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteComment.fulfilled, (state) => {
        state.isLoading = false
      })
      .addCase(deleteComment.rejected, (state) => {
        state.isLoading = false
        state.error = "Errore durante la cancellazione dei dati"
      });
  },
});

export const singleCommentLoading = (state) => state.singleCommentState.isLoading
export const singleCommentError = (state) => state.singleCommentState.error
export const showConfirmWindow = (state) => state.singleCommentState.showConfirmWindow
export const {openConfirmWindow, closeConfirmWindow} = singleCommentSlice.actions
export default singleCommentSlice.reducer
