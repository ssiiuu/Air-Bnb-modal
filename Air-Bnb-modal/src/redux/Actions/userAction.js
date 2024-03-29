import {
  GET_USER_LIST,
  LOGIN,
  SET_USER_ADMIN_LIST,
  SET_USER_DETAILS_INFOR,
  SET_USER_DETAILS_TICKET_INFOR,
} from "../Constants/userType";
import { message } from "antd";
import { history } from "../../App";
import httpServ from "../../serviceWorker/http.service";

export const loginUserAction = (data) => {
  return (dispatch) => {
    httpServ
      .loginUser(data)
      .then((res) => {
        message.success("Đăng nhập thành công!");
        dispatch({
          type: LOGIN,
          payload: res.data,
        });
        setTimeout(() => {
          history.push("/admin/dashboard");
        }, 1000);
      })
      .catch((err) => {
        console.log("err", err);
        message.error("Tài khoản hoặc mật khẩu không đúng!");
        history.push("/login");
      });
  };
};

export const getUserListAction = (user = "") => {
  return (dispatch) => {
    httpServ
      .getUserList(user)
      .then((res) => {
        console.log("userList", res.data);
        dispatch({
          type: GET_USER_LIST,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const addUserAdminAction = (data) => {
  return (dispatch) => {
    httpServ
      .addUserAdmin(data)
      .then((res) => {
        message.success("Thêm thành công");
        dispatch({
          type: SET_USER_ADMIN_LIST,
          payload: res.data,
        });
        setTimeout(() => {
          history.push("/admin/user");
        }, 1000);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const deleteUserAction = (id) => {
  return (dispatch) => {
    httpServ
      .deleteUser(id)
      .then((res) => {
        httpServ
          .getUserList()
          .then((res) => {
            message.success("Xóa thành công!");
            dispatch({
              type: GET_USER_LIST,
              payload: res.data,
            });
          })
          .catch((err) => {
            console.log("err", err);
          });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const getUserInforAction = (id) => {
  return (dispatch) => {
    httpServ
      .getUserInfor(id)
      .then((res) => {
        dispatch({
          type: SET_USER_DETAILS_INFOR,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const getListTicketsByUserAction = (id) => {
  return (dispatch) => {
    httpServ
      .getListTicketsByUser(id)
      .then((res) => {
        console.log("resTickets", res.data);
        dispatch({
          type: SET_USER_DETAILS_TICKET_INFOR,
          payload: res.data,
        });
        history.push("/admin/user/profile");
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const updateUserInforAction = (value, id) => {
  return (dispatch) => {
    httpServ
      .updateUserInfor(value, id)
      .then((res) => {
        message.success("Cập nhật thành công");
        setTimeout(() => {
          history.push("/admin/user");
        }, 1000);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const updateImgUserAction = (userImg, id) => {
  return (dispatch) => {
    httpServ
      .updateImgUser(userImg, id)
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};
