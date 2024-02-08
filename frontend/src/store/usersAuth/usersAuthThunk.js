import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { config, setAuthToken } from "../../utils/utils"


export const getUserThunk = createAsyncThunk('get/user', async(_,{rejectWithValue}) => {
    if (localStorage.token) {
        setAuthToken(localStorage.token)
    }

    try {
        const { data } = await axios.get('/api/auth')

        return data
    } catch (error) {
        return rejectWithValue(error.response.data.msg)
    }
})

export const addUserThunk = createAsyncThunk('post/user', async(user, { rejectWithValue }) => {
    try {
        const { data } = await axios.post('/api/users',user, config)

        localStorage.setItem('token', data.token)
        return data
    } catch (error) {
        return rejectWithValue(error.response.data.msg)
    }
})

