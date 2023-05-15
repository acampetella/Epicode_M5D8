import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  booksList: [],
  isLoading: false,
  error: ''
}

export const getBooks = createAsyncThunk("books/getBooks", async () => {
  try {
    const data = await fetch("https://epibooks.onrender.com/")
    const response = await data.json()
    return response
  } catch (error) {
    if (error) {
      throw new Error("Errore nella ricezione dei dati")
    }
  }
})

const booksSlice = createSlice({
    name: 'getBooks',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(getBooks.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getBooks.fulfilled, (state, action) => {
            state.isLoading = false
            state.booksList = action.payload
        })
        .addCase(getBooks.rejected, (state) => {
            state.isLoading = false
            state.error = 'Errore nella ricezione dei dati'
        })
    }
})

export const mainLoading = (state) => state.mainState.isLoading
export const mainBooksList = (state) => state.mainState.booksList
export const mainError = (state) => state.mainState.error
export default booksSlice.reducer
