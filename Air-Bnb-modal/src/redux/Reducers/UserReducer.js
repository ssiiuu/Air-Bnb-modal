import { localServe } from "../../Services/LocalServe";
import localStorageServ from "../../serviceWorker/locaStorage.service";
import { SET_USER_INFOR } from "../Constants/userConstant";
import {
  GET_USER_LIST,
  LOGIN,
  SET_USER_ADMIN_LIST,
  SET_USER_DETAILS_INFOR,
  SET_USER_DETAILS_TICKET_INFOR,
} from "../Constants/userType";

let initialState = {
  userInfor: localServe.getUserInfor(),
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFOR: {
      state.userInfor = action.payload;
      return { ...state };
    }
    case LOGIN: {
      state.userLogin = action.payload?.user;
      localStorageServ.userLogin.set(action.payload?.user);
      localStorageServ.tokenAdmin.set(action.payload?.token);
      return { ...state };
    }
    case GET_USER_LIST: {
      state.userList = action.payload;
      return { ...state };
    }
    case SET_USER_ADMIN_LIST: {
      let cloneArr = [...state.userList];
      cloneArr.push(action.payload);
      state.userList = cloneArr;
      return { ...state };
    }
    case SET_USER_DETAILS_INFOR: {
      state.userInforDetails = action.payload;
      return { ...state };
    }
    case SET_USER_DETAILS_TICKET_INFOR: {
      state.userInforDetailsTickets = action.payload;
      return { ...state };
    }

    default: {
      return { ...state };
    }
  }
};
