/* eslint-disable no-unused-vars */
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import bagServices from './bagServices'
const initialState={
  bag:[],
  isError:false,
  isSuccess:false,
  isLoading:false,
  message:''
}

//getbBag
export const getBag = createAsyncThunk(
  'bag/get',
  async(_,thunkAPI)=>{
    try {
     const token = thunkAPI.getState().auth.user.token
      return await bagServices.getBag(token)
    } catch (error) {
      const message = (
        error.response &&
          error.response.data&&
          error.response.data.message
      )||
      error.message||
      error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const addToBag = createAsyncThunk(
  'bag/add',
  async (itemData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await bagServices.addToBag(itemData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const bagSlice = createSlice({
  name :'bag',
 initialState,
 reducers:{
  bagreset:(state)=>initialState
},
  extraReducers: (builder)=>{
    builder
      .addCase(addToBag.pending, (state) => {
        state.isLoading = true
      })
      .addCase(addToBag.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.bag=action.payload
      })
      .addCase(addToBag.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getBag.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getBag.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.bag=action.payload
      })
      .addCase(getBag.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      });
     }
    })
    export const {reset} = bagSlice.actions
    export default bagSlice.reducer