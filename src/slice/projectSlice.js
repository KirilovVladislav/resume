import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    testProjects: [
        {
            id: `3`,
            name: `test Sendsay`,
            desc: `https://github.com/KirilovVladislav/Calculator-Constructor#readme`,
            repo: `https://github.com/KirilovVladislav/Calculator-Constructor`,
            page: `https://kirilovvladislav.github.io/Calculator-Constructor/`,

        },
        {
            id: `2`,
            name: `test Avito`,
            desc: `https://github.com/KirilovVladislav/test-avito#readme`,
            repo: `https://github.com/KirilovVladislav/test-avito`,
            page: `https://kirilovvladislav.github.io/test-avito/`,

        },
        {
            id: `1`,
            name: `test Funbox`,
            desc: `https://github.com/KirilovVladislav/test-funbox#readme`,
            repo: `https://github.com/KirilovVladislav/test-funbox`,
            page: `https://kirilovvladislav.github.io/test-funbox/`,

        },
    ],
    personalProjects: [
        {
            id: `2`,
            name: `what to watch`,
            repo: `https://github.com/KirilovVladislav/what-to-watch`,
            page: `https://what-to-watch-e80a0.web.app/`,
        },
        {
            id: `1`,
            name: `todo list`,
            repo: `https://github.com/KirilovVladislav/todo-list`,
            page: `https://kirilovvladislav.github.io/todo-list/#/`,
        },
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