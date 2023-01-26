import { createSlice } from "@reduxjs/toolkit";

const userId = JSON.parse(localStorage.getItem('userId'));

const initialState = {
    userId: userId ? userId : null,
    isError: false,
    isSuccess: false,
    isLoading: false
}

const userSlice = createSlice({
    name: "user",
    initialState: {
        userId: userId,
        userId: null
    },
    reducers: {

    },
    extraReducers: {

    }
})