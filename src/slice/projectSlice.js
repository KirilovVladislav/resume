import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    testProjects: [
        {
            id: `1`,
            name: `test funbox`,
            repo: `https://github.com/KirilovVladislav/test-funbox`,
            page: `https://kirilovvladislav.github.io/test-funbox/`,

        }
    ],
    personalProjects: [
        {
            id: `1`,
            name: `todo list`,
            repo: `https://github.com/KirilovVladislav/todo-list`,
            page: `https://kirilovvladislav.github.io/todo-list/#/`,
        }
    ],
}

const slice = createSlice({
    name: `project`,
    initialState,
    reducers: {

    }
})

export const {

} = slice.actions

export default slice.reducer