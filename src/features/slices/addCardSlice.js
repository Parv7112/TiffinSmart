import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



export const addUserCard = createAsyncThunk("addUserCard", async (data, {rejectWithValue})=>{
    console.log("data", data)

    const response = await fetch("https://64ad0e32b470006a5ec5419f.mockapi.io/AddCard", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(data)
    });
    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error)
    }
    
});
export const showUserCard = createAsyncThunk("showUserCard", async(args, {rejectWithValue})=>{
    
    const response = await fetch("https://64ad0e32b470006a5ec5419f.mockapi.io/AddCard");
    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error)
    }

});

const cardDetails = createSlice({
    name: "cardDetail",
    initialState: {
        cards: [],
        loading: false,
        error: null,
    },
    extraReducers: {
        [addUserCard.pending] : (state)=>{
                state.loading = true
        },
        [addUserCard.fulfilled] : (state, action)=>{
            state.loading = false;
            state.cards.push(action.payload)

        },
        [addUserCard.rejected] : (state, action)=>{
            state.loading = false;
            state.error = action.payload.message
        },


        [showUserCard.pending] : (state)=>{
            state.loading = true
        },
        [showUserCard.fulfilled] : (state, action)=>{
        state.loading = false;
        state.cards = action.payload

        },
        [showUserCard.rejected] : (state, action)=>{
        state.loading = false;
        state.error = action.payload
        },
        },
        
    
});

export default cardDetails.reducer;