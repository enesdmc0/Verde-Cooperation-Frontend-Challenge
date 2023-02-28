import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';


//GET POSTS
export const getPosts = createAsyncThunk('posts/getPosts', async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/posts`);
    return response.data;

});


//ADD POST
export const addPost = createAsyncThunk('posts/addPost', async (data) => {
    const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/posts`, data);
    return response.data;
});

//DELETE POST
export const deletePost = createAsyncThunk('posts/deletePost', async (id) => {
    const response = await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/posts/${id}`);
    return response.data;
});

//PUT POST
export const updatePost = createAsyncThunk('posts/updatePost', async (data) => {
    const response = await axios.put(`${process.env.REACT_APP_API_BASE_URL}/posts/${data.id}`, data);
    return response.data;
});

// GET COMMENTS
export const getComments = createAsyncThunk('comments/getComments', async (id) => {
    const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/posts/${id}/comments`);
    return response.data;
});

//ADD COMMENT
export const addComments = createAsyncThunk('comment/addComments', async (data) => {
    const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/comments`, data);
    return response.data;
});

//GET USER
export const getUser = createAsyncThunk('user/getUser', async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/users`);
    return response.data;
});