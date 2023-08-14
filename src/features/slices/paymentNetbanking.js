import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


//read action
export const showPaymentBanks = createAsyncThunk("showPaymentbanks", async(args, {rejectWithValue})=>{
    
    const response = await fetch("https://649d53eb9bac4a8e669d944b.mockapi.io/netbanking");
    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error)
    }

});


const paymentNetbankingSlice = createSlice({
    name: "Netbankingbanks",
    initialState: {
        loading: false,
        netbankingbanks: [],
        error: false
    },
    reducers: {},
    extraReducers: {
        [showPaymentBanks.pending] : (state)=>{
            state.loading = true
        },
        [showPaymentBanks.fulfilled] : (state, action)=>{
        state.loading = false;
        state.netbankingbanks = action.payload

        },
        [showPaymentBanks.rejected] : (state, action)=>{
        state.loading = false;
        state.error = action.payload
        },
    }
    

})

export default paymentNetbankingSlice.reducer;