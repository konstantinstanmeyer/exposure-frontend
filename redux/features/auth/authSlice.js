import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    username: localStorage.getItem('username') ? localStorage.getItem('username') : null,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setStatus: (state) => {
            if(!localStorage.getItem("username")) return;

            const username = localStorage.getItem('username');
            state.username = username;
        }
    }
})

