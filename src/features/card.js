import {createSlice} from "@reduxjs/toolkit"; 

const initialStateValue = {id: 1, width: 100, height: 100, name: "hello"};  

export const cardSlice = createSlice({
    name: "card", 
    inititalState: {value: initialStateValue},  
    
    reducers: {
        take: (state, action) => {
            return state = { 
                value: {
                    id: action.payload.id, 
                    width: action.payload.width, 
                    height: action.payload.height, 
                    name: action.payload.name
                }
            }
        }
    }
}) 

export const {take} = cardSlice.actions;  
export default cardSlice.reducer;