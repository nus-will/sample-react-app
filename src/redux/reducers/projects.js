import {
  createAction,
  createReducer
} from '@reduxjs/toolkit'

export const deleteProject = createAction('projects/delete')

const initialState = [
  {
    id: 1,
    name: 'React App',
    createBy: 'Will NUS',
    createDate: 'Jan 13, 2021',
    nValues: {}
  }
]

export const projects = createReducer(initialState, (builder) => {
  builder
    .addCase(deleteProject, (state, action) => {
      let projectId = action.payload
      return state.filter(prj => prj.id != projectId)
    })
})