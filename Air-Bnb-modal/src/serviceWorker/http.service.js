import AxiosServ from "./axios.service";

/* eslint-disable no-useless-constructor */
class HttpRequestService {
  constructor() {}

  // layDanhSachPhim = () => {
  //   const uri = "/api/QuanLyPhim/LayDanhSachPhim";
  //   return AxiosServ.getMethod(uri, false);
  // };

  // dangNhap = (data) => {
  //   const uri = "/api/QuanLyNguoiDung/DangNhap";
  //   return AxiosServ.postMethod(uri, data);
  // };
  layDanhSachPhong = () => {
    const url = "/api/rooms";

    return AxiosServ.getMethod(url);
  };
  layThongTinPhong = (id) => {
    const url = `/api/rooms/${id}`;

    return AxiosServ.getMethod(url);
  };
  layDanhGiaPhong = (id) => {
    const url = `/api/reviews/byRoom?roomId=${id}`;

    return AxiosServ.getMethod(url);
  };
  layVeDaDangKi = (id) => {
    const url = `/api/tickets/by-user?userId=${id}`;

    return AxiosServ.getMethod(url);
  };
  dangNhap = (data) => {
    const url = "/api/auth/login";

    return AxiosServ.postMethod(url, data);
  };
  dangKi = (data) => {
    const url = "/api/auth/register";

    return AxiosServ.postMethod(url, data);
  };
  // layThongTinNguoiDung=(data)=>{
  //   const url="/api/QuanLyNguoiDung/LayThongTinNguoiDung";

  //   return AxiosServ.postMethod(url,data);
  // }

  //user services
  loginUser = (data) => {
    const uri = `/api/auth/login`;
    return AxiosServ.postMethod(uri, data);
  };

  getUserList = (user = "") => {
    if (user.trim() !== "") {
      const uri = `/api/users/pagination?name=${user}`;
      return AxiosServ.getMethod(uri);
    }
    const uri = `/api/users/pagination`;
    return AxiosServ.getMethod(uri);
  };

  addUserAdmin = (data) => {
    const uri = "/api/users";

    return AxiosServ.postMethod(uri, data);
  };

  getUserInfor = (id) => {
    const uri = `/api/users/${id}`;
    return AxiosServ.getMethod(uri, id);
  };

  getListTicketsByUser = (userId) => {
    const uri = `/api/tickets/by-user?userId=${userId}`;
    return AxiosServ.getMethod(uri, userId);
  };

  updateUserInfor = (data, id) => {
    const uri = `/api/users/${id}`;
    return AxiosServ.putMethod(uri, data);
  };

  deleteUser = (id) => {
    const uri = `/api/users/${id}`;
    return AxiosServ.deleteMothod(uri, id);
  };
  updateImgUser = (userImg, id) => {
    const uri = `/api/users/upload-avatar/${id}`;
    return AxiosServ.postMethod(uri, userImg);
  };

  // location services

  getLocationList = (location = "") => {
    if (location.trim() !== "") {
      const uri = `/api/locations?location=${location}`;
      return AxiosServ.getMethod(uri);
    }
    const uri = `/api/locations`;
    return AxiosServ.getMethod(uri);
  };
  addLocation = (data) => {
    const uri = "/api/locations";
    return AxiosServ.postMethod(uri, data);
  };
  getLocationDetail = (id) => {
    const uri = `/api/locations/${id}`;
    return AxiosServ.getMethod(uri, id);
  };
  updateLocationDetail = (data, id) => {
    const uri = `/api/locations/${id}`;
    return AxiosServ.putMethod(uri, data);
  };
  deleteLocation = (id) => {
    const uri = `/api/locations/${id}`;
    return AxiosServ.deleteMothod(uri, id);
  };
  updateImgLocation = (locationImg, id) => {
    const uri = `/api/locations/upload-images/${id}`;
    return AxiosServ.postMethod(uri, locationImg);
  };

  //rooms services
  getRoomList = (locationId = "") => {
    if (locationId.trim() !== "") {
      const uri = `/api/rooms?locationId=${locationId}`;
      return AxiosServ.getMethod(uri);
    }
    const uri = `/api/rooms`;
    return AxiosServ.getMethod(uri);
  };
  addRoom = (data) => {
    const uri = `/api/rooms`;
    return AxiosServ.postMethod(uri, data);
  };
  getRoomDetail = (id) => {
    const uri = `/api/rooms/${id}`;
    return AxiosServ.getMethod(uri, id);
  };
  updateRoomDetail = (data, id) => {
    const uri = `/api/rooms/${id}`;
    return AxiosServ.putMethod(uri, data);
  };
  deleteRoom = (id) => {
    const uri = `/api/rooms/${id}`;
    return AxiosServ.deleteMothod(uri, id);
  };
  updateImgRoom = (roomImg, id) => {
    const uri = `/api/rooms/upload-image/${id}`;
    return AxiosServ.postMethod(uri, roomImg);
  };

  // Valueate Services
  getValueateListByRoom = (roomId) => {
    const uri = `/api/reviews/byRoom?roomId=${roomId}`;
    return AxiosServ.getMethod(uri, roomId);
  };
  addValueateByRoom = (data, roomId) => {
    const uri = `/api/reviews?roomId=${roomId}`;
    return AxiosServ.postMethod(uri, data);
  };
  deleteValueateByRoom = (valueateId) => {
    const uri = `/api/reviews/${valueateId}`;
    return AxiosServ.deleteMothod(uri);
  };
  getValueateDetail = (valueateId) => {
    const uri = `/api/reviews/${valueateId}`;
    return AxiosServ.getMethod(uri);
  };
  updateValueateDetail = (data, valueateId) => {
    const uri = `/api/reviews/${valueateId}`;
    return AxiosServ.putMethod(uri, data);
  };
}

const httpServ = new HttpRequestService();

export default httpServ;
