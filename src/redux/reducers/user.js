import {
  createAction,
  createReducer
} from '@reduxjs/toolkit'

export const setUser = createAction('user/set')

const initialState = { loggedIn: false, email: null }

export const user = createReducer(initialState, (builder) => {
  builder
    .addCase(setUser, (state, action) => {
      state.email = action.payload
      state.loggedIn = true
    })
})