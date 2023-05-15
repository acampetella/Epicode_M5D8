import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isValidate: false,
  error: ""
}

export const addComment = createAsyncThunk(
  "add/addComment",
  async (comment) => {
    try {
      const data = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJkYTdlMWIxNGE1MTAwMTQ2NjNmZmYiLCJpYXQiOjE2ODM0ODAyODgsImV4cCI6MTY4NDY4OTg4OH0.81Ws6gOdfkPIkoP8Lhv5qGYuXV6F9HXHx3Edf5xDcMo",
          },
          method: "POST",
          body: JSON.stringify(comment)
        }
      )
      const response = await data.json()
      return response
    } catch (error) {
      if (error) {
        throw new Error("Errore nell'invio dei dati");
      }
    }
  }
)

const addCommentSlice = createSlice({
  name: "addComment",
  initialState,
  reducers: {
    validateToTrue: (state) => {
        state.isValidate = true
        state.error = ''
    },
    validateToFalse: (state) => {
        state.isValidate = false
        state.error = 'Errore nella validazione dei dati'
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(addComment.pending, (state) => {
        state.isLoading = true
      })
      .addCase(addComment.fulfilled, (state) => {
        state.isLoading = false
      })
      .addCase(addComment.rejected, (state) => {
        state.isLoading = false
        state.error = "Errore durante l'invio dei dati";
      });
  },
});

export const addCommentLoading = (state) =>state.addCommentState.isLoading
export const addCommentError = (state) => state.addCommentState.error
export const addCommentIsValidate = (state) => state.addCommentSate.isValidate
export const {validateToTrue, validateToFalse} = addCommentSlice.actions
export default addCommentSlice.reducer
