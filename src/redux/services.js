import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';


export const getPosts = createAsyncThunk("posts/getPosts", async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}`);
    return response.data;
})