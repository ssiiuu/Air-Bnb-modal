import {
  SET_DANH_SACH_LOCATION,
  SET_DANH_SACH_ROOM,
} from "../Constants/userConstant";

import { ADD_ROOM, GET_ROOM_DETAIL } from "../Constants/roomType";
import { RoomDetailModel } from "../../_core/models/roomDetailModel";
let initialState = {
  dsRoom: [],
  roomDetail: new RoomDetailModel(),
};

export const roomReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DANH_SACH_ROOM: {
      state.dsRoom = action.payload;
      return { ...state };
    }
    case ADD_ROOM: {
      let CloneArr = [...state.dsRoom];
      CloneArr.push(action.payload);
      state.dsRoom = CloneArr;
      return { ...state };
    }
    case GET_ROOM_DETAIL: {
      state.roomDetail = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
