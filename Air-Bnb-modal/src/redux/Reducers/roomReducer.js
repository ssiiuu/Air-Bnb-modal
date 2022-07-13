import { SET_DANH_SACH_LOCATION, SET_DANH_SACH_ROOM } from "../Constants/userConstant";


let initialState = {
    dsRoom: [],
};

export const roomReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DANH_SACH_ROOM: {
            // if (action.payload.locationId != null) {
                state.dsRoom = action.payload;
            // }
            return { ...state };
        }

        default:
            return { ...state };
    }
};
