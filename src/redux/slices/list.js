import {createSlice} from '@reduxjs/toolkit';

const listSlice = createSlice({
    name : "list",
    initialState : {list_arr : []},
    reducers : {
        getList : (state, action) => {
            state.list_arr = action.payload;
    }}
})

export const {getList} = listSlice.actions;
export default listSlice.reducer;