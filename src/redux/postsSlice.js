import { createSlice } from '@reduxjs/toolkit'
import {getComments, getPosts, deletePost, addPost, updatePost, addComments, getUser} from './services';

export const postsSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        post: {},
        comments: [],
        user: [],
        openEdit: false,
        openComment: false,
        login: false,
        getPosts: {
            status: "idle",
            error: null
        },
        getComments: {
            status: "idle",
            error: null
        },
        deletePost: {
            status: "idle",
            error: null
        },
        putPost: {
            status: "idle",
            error: null
        },
        addPost: {
            status: "idle",
            error: null
        },
        addComment: {
            status: "idle",
            error: null
        },
    },
    reducers: {
        getPost: (state, action) => {
            const findPost = state.posts.find(post => post.id === action.payload)
            state.post = findPost
        },
        toggleEdit: (state) => {
            state.openEdit = !state.openEdit;
        },
        toggleComment: (state) => {
            state.openComment = !state.openComment
        },
        loginToggle: (state, action) => {
            state.login = !state.login
        },
        loginControl: (state, action) => {
            const username = action.payload.username;
            const password = action.payload.password;
            if (state.user.username === username || state.user.password === password) {
                state.login = true
            }
        },
    },
    extraReducers: {
        //GET POSTS
        [getPosts.pending]: (state) => {
            state.getPosts.status = "loading";
        },
        [getPosts.fulfilled]: (state, action) => {
            state.posts = action.payload
            state.getPosts.status = "succeeded";
        },
        [getPosts.rejected]: (state, action) => {
            state.getPosts.status = "failed";
            state.getPosts.error = action.error.message;
        },
        //Delete Post
        [deletePost.pending]: (state) => {
            state.deletePost.status = "loading";
        },
        [deletePost.fulfilled]: (state, action) => {
            const id = action.payload;
            const filterPosts = state.posts.filter(post => post.id !== id);
            state.posts = filterPosts
            console.log(state.posts.length)
            state.deletePost.status = "succeeded";
        },
        [deletePost.rejected]: (state, action) => {
            state.deletePost.status = "failed";
            state.deletePost.error = action.error.message
        },
        //ADD POST
        [addPost.pending]: (state) => {
            state.addPost.status = "loading";
        },
        [addPost.fulfilled]: (state, action) => {
            state.posts.push(action.payload)
            state.addPost.status = "succeeded";
        },
        [addPost.rejected]: (state, action) => {
            state.addPost.status = "failed";
            state.addPost.error = action.error.message
        },
        //UPDATE POST
        [updatePost.pending]: (state) => {
            state.putPost.status = "loading";
        },
        [updatePost.fulfilled]: (state, action) => {
            const find = state.posts.find(post => post.id === action.payload.id)
            find.title = action.payload.title
            find.body = action.payload.body
            state.putPost.status = "succeeded";
            console.log(action.payload)
        },
        [updatePost.rejected]: (state, action) => {
            state.putPost.status = "failed";
            state.putPost.error = action.error.message
        },
        //GET ID COMMENTS
        [getComments.pending]: (state) => {
            state.getComments.status = "loading";
        },
        [getComments.fulfilled]: (state, action) => {
            state.comments = action.payload;
            state.getComments.status = "succeeded"
        },
        [getComments.rejected]: (state, action) => {
            state.getComments.status = "failed";
            state.getComments.error = action.error.message
        },
        //ADD COMMENT
        [addComments.pending]: (state) => {
            state.addComment.status = "loading";
        },
        [addComments.fulfilled]: (state, action) => {
            state.comments.push(action.payload);
            state.addComment.status = "succeeded";
        },
        [addComments.rejected]: (state, action) => {
            state.addComment.status = "failed";
            state.addComment.error = action.error.message
        },
        //GET USER
        [getUser.fulfilled]: (state, action) => {
            state.user = action.payload[0];
        },
    }
});

//INITIAL STATE
export const allPosts = state => state.posts.posts;
export const singlePost = state => state.posts.post;
export const allComments = state => state.posts.comments;
export const admin = state => state.posts.user;
export const editOpen = state => state.posts.openEdit;
export const commentOpen = state => state.posts.openComment;
export const loginValue = state => state.posts.login;


export const {getPost, toggleEdit, toggleComment, loginControl, loginToggle} = postsSlice.actions;
export default postsSlice.reducer;