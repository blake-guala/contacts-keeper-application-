import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading: false,
    contacts: [],
    error: null
}

export const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers:{
        addContact: (state,{payload}) => {
            state.contacts = [payload, ...state.contacts]
        }
    }
})

export const { addContact } = contactSlice.actions
export default contactSlice.reducer