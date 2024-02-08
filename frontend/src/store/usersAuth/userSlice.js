import { createSlice } from "@reduxjs/toolkit"
import { addUserThunk } from "./usersAuthThunk"

const token = localStorage.getItem('token') ? 
localStorage.getItem('token') : null

const initialState = {
    loading: false,
    token,
    user: null,
    error: null,
    authenticated: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        setError: (state) => {
            state.error = null
        }
    },
    extraReducers(builder){
        builder
        .addCase(addUserThunk.pending, (state) => {
            state.loading = true
        })
        .addCase(addUserThunk.fulfilled, (state) => {
            state.loading = false
            state.token = localStorage.getItem('token')
            state.authenticated = true
        })
        .addCase(addUserThunk.rejected, (state, {payload}) => {
            state.loading = false
            state.error = payload
            state.authenticated = false
        })
    }
})

//eslint-disable-next-line
export const { setError } = userSlice.actions
export default userSlice.reducer