import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import list from './slices/list';

const rootReducer = combineReducers({list, });

const store = configureStore({reducer : rootReducer});

export default store;
