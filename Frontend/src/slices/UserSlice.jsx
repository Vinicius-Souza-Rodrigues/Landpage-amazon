import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const checkLoginExists = createAsyncThunk(
  'user/checkLoginExists',
  async (login, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:8080/user/pegaremail', { login })
      console.log(response.data)
      return response.data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const createRegister = createAsyncThunk(
  'user/createRegister',
  async (user, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:8080/user/register', user)
      console.log(response.data)
      return response.data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const loginPrime = createAsyncThunk(
  'user/logimPrime',
  async (logim, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:8080/user/login', logim)
      console.log(response.data)
      return response.data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const initialState = {
    loginExists: false,
    token: null,
    error: null,
    loading: false,
    userName: null,
    userEmail: null,
  }

const userSlice = createSlice({
    name: 'user',
    initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkLoginExists.pending, (state) => {
        state.error = null
        state.loading = true
      })
      .addCase(checkLoginExists.fulfilled, (state, action) => {
        state.userEmail = action.payload
        state.loading = false
      })
      .addCase(checkLoginExists.rejected, (state, action) => {
        state.loginExists = false
        state.loading = false
        state.userEmail = null
        state.error = action.payload  
      })

      .addCase(createRegister.pending, (state) => {
        state.error = null
        state.loading = true
      })
      .addCase(createRegister.fulfilled, (state, action) => {
        state.userEmail = 'action.payload'
        state.loading = false
      })
      .addCase(createRegister.rejected, (state, action) => {
        state.loginExists = false
        state.loading = false
        state.userEmail = null
        state.error = action.payload  
      })

      .addCase(loginPrime.pending, (state) => {
        state.error = null
        state.loading = true
      })
      .addCase(loginPrime.fulfilled, (state, action) => {
        state.loginExists = true
        state.token = action.payload
        state.loading = false
      })
      .addCase(loginPrime.rejected, (state, action) => {
        state.loginExists = false
        state.loading = false
        state.userEmail = null
        state.error = action.payload  
      })
  }
})

export const { reset } = userSlice.actions
export default userSlice.reducer
