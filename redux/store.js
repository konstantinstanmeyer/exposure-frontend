import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        post: postReducer
    }
})