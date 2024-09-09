import { createSlice } from "@reduxjs/toolkit";


const appSlice = createSlice({

    name: "app",
    initialState :{
        video :[],
        category : "All",
    },
    reducers:{
        setHomeVideos : (state,action)=>{
            state.video= action.payload;
        },
        setcategory: (state, action) =>{
            state.category = action.payload;
        }
    }
    
})


export const {setHomeVideos, setcategory} = appSlice.actions;
export default appSlice.reducer;



