import { createSlice } from "@reduxjs/toolkit";  // importing createSlice form '@reduxjs/toolkit';
import { deleteUsers } from "../../actions/actions";

const userSlice = createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser(state,action){
            state.push(action.payload);
        },
        removeUser(state,action){
            state.splice(action.payload,1); // we used splice method here.
        },
        // deleteUsers(state,action){
        //     return [];                      // Here we are deleting data from initialState variable.We can do it by multiple ways too.
        // },
    },

// Using extraReducers :
    // extraReducers(builder){       // Using extraRducers we can use micro-reducers from one slice to another slice.// for e.g - just think we have multiple slices in our aplication that time we can use them.
    //     builder.addCase(userSlice.actions.deleteUsers, (state,action)=>{
    //         return [];
    //     });
    // }

// using extraReduers() but this time we are using the createAction() & checking that action type.
extraReducers(builder){
    builder.addCase(deleteUsers,()=>{ // here deleteUsers is not function it is actiontype from createAction() method.
        return [];
    })
} 
});

// console.log(userSlice.actions);   // Used to print the action creators. It will return object of action creators.

export default userSlice.reducer;     // notice how we are exporting it. and also notice the "s" in reducer.Here reducer is built-in keyword.

// export const {addUser,removeUser,deleteUsers}  = userSlice.actions;  // destructuring & exporting action creators.

export const {addUser,removeUser} = userSlice.actions; // when we uses the createAction that time here we not need to export that deleteUsers function.