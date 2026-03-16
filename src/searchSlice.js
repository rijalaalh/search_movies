/** @format */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
export const fetechsearchapi = createAsyncThunk('fetech/movie', async (searsh) => {
 const rep=await axios(`http://www.omdbapi.com/?apikey=1f6a58f5&s=${searsh?searsh:'batman'}`)
 return rep.data.Search
});
const searchslice = createSlice({
  name: 'search',
  initialState: {
    value: null,
    result:[],
    isloading:false
  },
  reducers: {},
  extraReducers(builder){
    builder.addCase(fetechsearchapi.pending,(state,action)=>{
        console.log("pending...")
        state.isloading=true
    }).addCase(fetechsearchapi.fulfilled,(state,action)=>{
        state.result=action.payload
        state.isloading=false
        console.log(state.result)
    })
  }
});
export default searchslice.reducer
