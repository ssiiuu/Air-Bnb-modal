import { localServe } from "../../Services/LocalServe";
import {  SET_USER_INFOR } from "../Constants/userConstant";

let initialState={
    userInfor:localServe.getUserInfor(),
}

export const userReducer=(state=initialState,action)=>{
    switch(action.type){
        case SET_USER_INFOR:{
            state.userInfor=action.payload;
            return {...state};
        }

        default:{
            return {...state};
        }
    }
}