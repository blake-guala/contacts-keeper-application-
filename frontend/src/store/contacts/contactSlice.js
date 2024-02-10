import { createSlice } from "@reduxjs/toolkit"
import { addContactThunk, getContactThunk, updateContactThunk } from "./contactThunk"

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
        },
        contactsNull: (state) => {
            state.contacts = []
        }
    },
    extraReducers(builder){
        builder
        .addCase(addContactThunk.pending, (state) => {
            state.loading = true
        })
        .addCase(addContactThunk.fulfilled, (state,{payload}) => {
            state.loading = false
            state.contacts = [payload, ...state.contacts]
        })
        .addCase(addContactThunk.rejected, (state, {payload}) => {
            state.loading = false
            state.error = payload
        })
        .addCase(getContactThunk.pending, (state) => {
            state.loading = true
        })
        .addCase(getContactThunk.fulfilled, (state, {payload}) => {
            state.loading = false
            state.contacts = payload
        })
        .addCase(getContactThunk.rejected, (state, {payload}) => {
            state.loading = false
            state.error = payload
        })
        .addCase(updateContactThunk.pending, (state) => {
            state.loading = true
        })
        .addCase(updateContactThunk.fulfilled, (state, {payload}) => {
            state.contacts = state.contacts.map(contact => (
                contact._id === payload._id ? payload : contact
            ))
            state.current = null
        })
        .addCase(updateContactThunk.rejected, (state, {payload}) => {
            state.loading = false
            state.error = payload
        })
    }

})

export const { addContact, deleteContact,updateContact, 
    setAlert, removeAlert, setCurrent, searchContacts, setFilteredNull, contactsNull } = contactSlice.actions
export default contactSlice.reducer