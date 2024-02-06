import { configureStore } from '@reduxjs/toolkit'
import contactReducer from './contacts/contactSlice'


export const store = configureStore({
    reducer: {
        contact: contactReducer
    },

    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({ serializableCheck: false })
})

