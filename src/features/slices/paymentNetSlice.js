import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


//read action
export const showPaymentNet = createAsyncThunk("showPaymentNet", async(args, {rejectWithValue})=>{
    
    const response = await fetch("https://649a703ebf7c145d0238d6b4.mockapi.io/populabank");
    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error)
    }

});


const paymentSlice = createSlice({
    name: "paymentNetbanking",
    initialState: {
        loading: false,
        netbanking: [],
        error: false
    },
    reducers: {},
    extraReducers: {
        [showPaymentNet.pending] : (state)=>{
            state.loading = true
        },
        [showPaymentNet.fulfilled] : (state, action)=>{
        state.loading = false;
        state.netbanking = action.payload

        },
        [showPaymentNet.rejected] : (state, action)=>{
        state.loading = false;
        state.error = action.payload
        },
    }
    

})

export default paymentSlice.reducer;