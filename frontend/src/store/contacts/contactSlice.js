import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading: false,
    contacts: [],
    alert: null,
    error: null,
    current: null,
    filtered: null
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
        updateContact: (state, { payload }) => {
            state.contacts = state.contacts.map(contact => (
                contact.id === payload.id ? payload : contact
            ))
            state.current = null
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
        searchContacts: (state, {payload}) => {
            state.filtered = state.contacts.filter(contact => (
                contact.firstName.toLowerCase().includes(payload) || contact.lastName.toLowerCase()
                .includes(payload) || contact.email.toLowerCase().includes(payload)
            ))
        },
        setFilteredNull: (state) => {
            state.filtered = null
        }
    }
})

export const { addContact, deleteContact,updateContact, 
    setAlert, removeAlert, setCurrent, searchContacts, setFilteredNull } = contactSlice.actions
export default contactSlice.reducer