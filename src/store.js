import { configureStore } from '@reduxjs/toolkit'
import { reducer as formReducer } from 'redux-form'

import appReducer from './slice/appSlice'
import aboutReducer from './slice/aboutSlice'
import projectReducer from './slice/projectSlice'
// import createAPI from './api'


// const api = createAPI((...args) => store.dispatch(...args))

const store = configureStore({
    reducer: {
        app: appReducer,
        about: aboutReducer,
        project: projectReducer,
        form: formReducer,
    },
    // middleware: (getDefaultMiddleware) => (
    //     getDefaultMiddleware({
    //         thunk: {
    //             extraArgument: api,
    //         }
    //     })
    // )
})


export default store