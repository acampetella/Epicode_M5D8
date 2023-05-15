import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    book: null,
    isLoading: false,
    error: ''
}

export const getBook = createAsyncThunk('book/getBook', async (asin) => {
    try {
        const data = await fetch(`https://epibooks.onrender.com/${asin}`)
        const response = await data.json()
        return response
      } catch (error) {
        if (error) throw new Error("Errore nella ricezione dei dati")
      }
})

const bookSlice = createSlice({
    name: 'getBook',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(getBook.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getBook.fulfilled, (state, action) => {
            state.isLoading = false
            state.book = action.payload
        })
        .addCase(getBook.rejected, (state) => {
            state.isLoading = false
            state.error = 'Errore nella ricezione dei dati'
        })
    }
})

export const bookDetails = (state) => state.bookDetailsState.book
export const bookDetailsLoading = (state) => state.bookDetailsState.isLoading
export const bookDetailsError = (state) => state.bookDetailsState.error
export default bookSlice.reducer