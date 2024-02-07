import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading: false,
    contacts: [],
    alert: null,
    error: null
}

export const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers:{
        addContact: (state,{ payload }) => {
            state.contacts = [payload, ...state.contacts]
        },
        setAlert: (state, { payload }) => {
            state.alert = payload
        },
        removeAlert:(state, {payload}) => {
            state.alert = null
        }
    }
})

export const { addContact, setAlert, removeAlert } = contactSlice.actions
export default contactSlice.reducer