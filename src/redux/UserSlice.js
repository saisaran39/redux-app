import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        user: '',
        loading: true,
        error: false
    },
    reducers: {
        setUser: (state, descObj) => {
            state.user = descObj.payload;
            state.loading = false;
            state.error = false;
        },
        setLoading: (state) => {
            state.user = null;
            state.loading = true;
            state.error = false;
        },
        setError: (state) => {
            state.name =null;
            state.loading = false;
            state.error = true;
        }
    }
});

export default userSlice;