import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: 'light'
}

const appSlice = createSlice({
    name: 'setTheme',
    initialState,
    reducers: {
        themeToDark: (state) => {
            state.theme = 'dark'
        },
        themeToLight: (state) => {
            state.theme = 'light'
        }
    }
})

export const appTheme = (state) => state.appState.theme
export const {themeToDark, themeToLight} = appSlice.actions
export default appSlice.reducer