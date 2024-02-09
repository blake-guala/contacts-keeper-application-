import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { config } from "../../utils/utils";

export const addContactThunk = createAsyncThunk('post/contact', async(contact, { rejectWithValue }) => {
    try {
        const { data } = await axios.post('/api/contacts', contact, config)

        return data
    } catch (error) {
        return rejectWithValue(error.response.data.msg)
    }
})