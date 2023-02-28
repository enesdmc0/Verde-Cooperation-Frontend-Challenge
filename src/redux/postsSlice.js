import { createSlice } from '@reduxjs/toolkit'

export const postsSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        status: "idle"
    },
    reducers: {},
    extraReducers: {

    }
});

export default postsSlice.reducer;