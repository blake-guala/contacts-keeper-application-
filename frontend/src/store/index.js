import { configureStore } from '@reduxjs/toolkit'
import contactReducer from './contacts/contactSlice'
import userReducer from './usersAuth/userSlice'


export const store = configureStore({
    reducer: {
        contact: contactReducer,
        user : userReducer
    },

    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({ serializableCheck: false })
})

