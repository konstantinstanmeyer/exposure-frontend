import { createSlice } from "@reduxjs/toolkit";

const username = localStorage.getItem('username');

const initialState = {
    username: username ? username : null,
    isError: false,
    isSuccess: false,
    isLoading: false
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        getStatus
    },
    extraReducers: {

    }
})