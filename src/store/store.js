import { configureStore } from '@reduxjs/toolkit'
import {loginSlice} from './slice/loginSlice'
import {combineReducers} from 'redux' 

import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'

const persistConfig = {
	key: 'root',
	storage
}
const reducers = combineReducers({
	login:  loginSlice.reducer           
})
const persistedReducer = persistReducer(persistConfig, reducers)


export const store = configureStore({
	reducer: persistedReducer,
	middleware: [thunk]
})