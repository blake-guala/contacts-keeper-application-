import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { config } from "../../utils/utils"

export const addUserThunk = createAsyncThunk('post/user', async(user, { rejectWithValue }) => {
    try {
        const { data } = await axios.post('/api/users',user, config)

        localStorage.setItem('token', data.token)
        return data
    } catch (error) {
        return rejectWithValue(error.response.data.msg)
    }
})

