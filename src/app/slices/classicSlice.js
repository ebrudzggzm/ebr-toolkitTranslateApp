//normal yöntemle slice kurulumu
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading : false,
    isError : false,
    users:[]
}

const classicSlice = createSlice({
 name : "classic",
 initialState ,
 reducers :{
    setisLoading :(state,action)=>{
        state.isLoading = true;
    },
    setError:(state,action)=>{
        state.isLoading = false;
 state.isError = action.payload;
    },
    setUsers : (state,action)=>{
        state.isLoading = false;
        state.isError = false;
        state.users = action.payload;
    }

 } 

})

export default classicSlice.reducer;//veriyi store da tutmamızı sağlayacak

export const {setUsers,setError,setisLoading } = classicSlice.actions;