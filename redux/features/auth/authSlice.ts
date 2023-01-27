import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface authSliceState {
    username: string | null,
    isLoading: boolean,
    isSuccess: boolean,
    isError: boolean,
}

const initialState: authSliceState = {
    username: localStorage.getItem('username') ? localStorage.getItem('username') : null,
    isLoading: false,
    isSuccess: false,
    isError: false,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setStatus: (state) => {
            if(!localStorage.getItem("username")) return;

            const username = localStorage.getItem('username');
            state.username = username;
        },
        login: (state, action: PayloadAction<any>) => {
            const email = action.payload.email;
            const password = action.payload.password;

            
        },
    }
})

