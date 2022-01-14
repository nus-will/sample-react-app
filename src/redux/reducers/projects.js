import {
  createAction,
  createReducer
} from '@reduxjs/toolkit'

export const deleteProject = createAction('projects/delete')

const initialState = [
  {
    id: 1,
    name: 'React App',
    createdBy: 'Will NUS',
    createdDate: 'Jan 13, 2021',
    nValues: [
      {
        year: '2020',
        budget: 1000,
      },
      {
        year: '2021',
        budget: 5000,
      },
      {
        year: '2022',
        budget: 2000,
      }
    ]
  },
  {
    id: 2,
    name: 'React App 02',
    createdBy: 'Will NUS',
    createdDate: 'Jan 14, 2021',
    nValues: [
      {
        year: '2020',
        budget: 2000,
      },
      {
        year: '2021',
        budget: 4000,
      },
      {
        year: '2022',
        budget: 7000,
      }
    ]
  }
]

export const projects = createReducer(initialState, (builder) => {
  builder
    .addCase(deleteProject, (state, action) => {
      let projectId = action.payload
      return state.filter(prj => prj.id != projectId)
    })
})