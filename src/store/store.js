import { configureStore } from '@reduxjs/toolkit'
import {loginSlice} from './slice/loginSlice'
import {appointmentSlice} from './slice/appoinmentSlice'
import {combineReducers} from 'redux' 

import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'

const persistConfig = {
	key: 'root',
	storage
}
const reducers = combineReducers({
	login:  loginSlice.reducer,
	appointment: appointmentSlice.reducer
})
const persistedReducer = persistReducer(persistConfig, reducers)


export const store = configureStore({
	reducer: persistedReducer,
	middleware: [thunk]
})