/* eslint-disable no-unused-vars */
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import itemServices from './itemServices'
const initialState ={
  items:[],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
  item:{}
}

//create new goal
export const createItem = createAsyncThunk(
  'items/create',
  async (itemData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await itemServices.uploadItem(itemData, token)
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
export const getItems = createAsyncThunk(
  'items/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await itemServices.getItems(token)
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
export const getUserItems = createAsyncThunk(
  'items/getuser',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await itemServices.getUserItems(token)
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
export const getItem = createAsyncThunk(
  'item/get',
  async (itemId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await itemServices.getItem(itemId, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const itemSlice = createSlice({
  name :'item',
 initialState,
 reducers:{
  reset:(state)=>initialState
},
  extraReducers: (builder)=>{
    builder
      .addCase(createItem.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createItem.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.items.push(action.payload)
      })
      .addCase(createItem.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getItems.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getItems.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.items=action.payload
      })
      .addCase(getItems.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
    })
    .addCase(getUserItems.pending, (state) => {
      state.isLoading = true
    })
    .addCase(getUserItems.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.items=action.payload
    })
    .addCase(getUserItems.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
  })
    .addCase(getItem.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getItem.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.item = action.payload; // Assuming you have a 'item' field in your state to hold the current item
    })
    .addCase(getItem.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });
  }
})

export const {reset} = itemSlice.actions
export default itemSlice.reducer


