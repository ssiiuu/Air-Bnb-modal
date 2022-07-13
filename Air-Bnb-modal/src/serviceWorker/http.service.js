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
    const url="/api/rooms";

    return AxiosServ.getMethod(url);
  }
  dangNhap=(data)=>{
    const url="/api/auth/login";

    return AxiosServ.postMethod(url,data);
  }
  dangKi=(data)=>{
    const url="/api/auth/register";

    return AxiosServ.postMethod(url,data);
  }
  // layThongTinNguoiDung=(data)=>{
  //   const url="/api/QuanLyNguoiDung/LayThongTinNguoiDung";
    
  //   return AxiosServ.postMethod(url,data);
  // }
}

const httpServ = new HttpRequestService();

export default httpServ;
