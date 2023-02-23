import { createAction } from "@reduxjs/toolkit";  // importing createAction.

export const deleteUsers = createAction('deleteUsers');

{/*
createAction() is used to create the action type & that action will be imported in slice file and 
inside the extraReducers() we are checking that action type.
*/}