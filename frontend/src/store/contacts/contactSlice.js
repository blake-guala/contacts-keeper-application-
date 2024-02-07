import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading: false,
    contacts: [],
    alert: null,
    error: null,
    current: null
}

export const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers:{
        addContact: (state,{ payload }) => {
            state.contacts = [payload, ...state.contacts]
        },
        deleteContact: (state, { payload }) => {
            state.contacts = state.contacts.filter(contact => (
                contact.id !== payload
            ))
        },
        setAlert: (state, { payload }) => {
            state.alert = payload
        },
        removeAlert:(state, {payload}) => {
            state.alert = null
        },
        setCurrent: (state, {payload}) => {
            state.current = payload
        },
        updateContact: (state, { payload }) => {
            state.contacts = state.contacts.map(contact => (
                contact.id === payload.id ? payload : contact
            ))
            state.current = null
        }
    }
})

export const { addContact, deleteContact,updateContact, setAlert, removeAlert, setCurrent } = contactSlice.actions
export default contactSlice.reducer