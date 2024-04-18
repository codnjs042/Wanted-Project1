import {createSlice} from '@reduxjs/toolkit';

const listSlice = createSlice({
    name : "list",
    initialState : {list_arr : [], item_arr : [], },
    reducers : {
        getList : (state, action) => {
            state.list_arr = action.payload;
        },
        getItem : (state, action) => {
            state.item_arr = action.payload;
        },
    }
})

export const {getList, getItem} = listSlice.actions;
export default listSlice.reducer;