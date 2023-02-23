import {configureStore} from '@reduxjs/toolkit';  // importing configureStore from @reduxjs/toolkit.
import  userSlice  from './Slices/UserSlice';

const store = configureStore({
    reducer:{                  // here reducer works like rootReducer.
        users : userSlice      // here we are passing slice in object with any name to it.
    }
})

export default store;