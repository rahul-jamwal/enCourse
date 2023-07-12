import  { configureStore } from '@reduxjs/toolkit'
import { adminReducer } from './reducers/adminReducer.js';
import { courseReducer } from './reducers/courseReducer.js';
import { otherReducer } from './reducers/otherReducer.js';
import { profileReducer, subscriptionReducer, userReducer } from './reducers/userReducer.js'

export const server = 'http://localhost:4000/api/v1'

const store = configureStore({
    reducer: {
        user: userReducer, 
        profile: profileReducer,
        course: courseReducer,
        subscription: subscriptionReducer,
        admin: adminReducer,
        other: otherReducer,
    }
})

export default store;