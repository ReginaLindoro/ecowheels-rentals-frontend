import { configureStore } from '@reduxjs/toolkit'
import hardwareReducer from '../features/hardwareSets/hardwareSlice'


//combines all reducers under the hood
const store = configureStore({
    reducer: {
        hardware: hardwareReducer,
    },
})

export default store