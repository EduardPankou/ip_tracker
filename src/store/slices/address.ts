import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

interface addressState {
    value: any;
    loading: boolean;
    error: string | undefined | null;
}

const initialState: addressState = {
    value: {},
    loading: false,
    error: null,
};

export const getAddressByIP = createAsyncThunk('address/getAddressByIP', async (ipAddress: string | undefined) => {
    const url = ipAddress?.length ? `https://ipwho.is/${ipAddress}` : 'https://ipwho.is'
    try {
        return (await axios.get(url)).data;
    } catch (error: any) {
        throw error.response.data.error;
    }
});

const addressSlice = createSlice({
    name: 'address',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAddressByIP.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAddressByIP.fulfilled, (state, action) => {
                state.loading = false;
                state.value = action.payload;
            })
            .addCase(getAddressByIP.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default addressSlice.reducer;
