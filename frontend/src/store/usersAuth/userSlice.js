import { createSlice } from "@reduxjs/toolkit"
import { addUserThunk, getUserThunk, loginUserThunk } from "./usersAuthThunk"

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
        },
        setAuth: (state) => {
            state.authenticated = false
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
        .addCase(getUserThunk.pending, (state) => {
            state.loading = true
        })
        .addCase(getUserThunk.fulfilled, (state, {payload}) => {
            state.loading = false
            state.authenticated = true
            state.user = payload
        })
        .addCase(getUserThunk.rejected, (state, {payload}) => {
            state.loading = false
            state.error = payload
        })
        .addCase(loginUserThunk.pending, (state,{payload}) => {
            state.loading = true
        })
        .addCase(loginUserThunk.fulfilled, (state, {payload}) => {
            state.loading = false
            state.token = localStorage.getItem('token')
            state.authenticated = true
        })
        .addCase(loginUserThunk.rejected, (state, {payload}) => {
            state.authenticated = false
            state.error = payload
            state.loading = false
        })
    }
})

//eslint-disable-next-line
export const { setError, setAuth } = userSlice.actions
export default userSlice.reducer