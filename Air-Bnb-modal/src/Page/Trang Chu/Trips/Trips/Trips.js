import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import UserNav from "../../../../components/NavHeader/UserNav";
import { DOMAIN, TOKEN_CYBERSOFT } from "../../../../configUrl/configURL";
import "./Trips.css";

import FooterNav from "../../../Footer/Footer";
import InforTrips from "../InforTrips/InforTrips";
import MyPofolio from "../MyPofolio/MyPofolio";
import httpServ from "../../../../serviceWorker/http.service";
import NavDifferent from "../../../../components/NavDifferent/NavDifferent";

export default function Trips() {
  let { id } = useParams();
  let userInfor = useSelector((state) => state.userReducer.userInfor);
  let history = useHistory();
  const handleClickTrangChu = () => {
    history.push("/");
  };
  const [danhTrips, setDanhTrips] = useState([]);
  useEffect(() => {
    httpServ
      .layVeDaDangKi(id)
      .then((res) => {
        console.log("res", res);
        setDanhTrips(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log("phong chi tiet", danhTrips);

  const renderTable = (phong) => {
    return phong.map((phongItem, index) => {
      if (phongItem.roomId != null && index < 4) {
        return <InforTrips phong={phongItem} key={index} />;
      }
    });
  };
  return (
    <div>
      <NavDifferent />
      <div className="mx-20 my-16">
        <div className="manager_pofolio">
          <div className="border rounded-lg block xl:sticky top-28 mr-10 my_pofolio">
            <MyPofolio />
          </div>
          <div className="my_trips">
            <h1 className="text-3xl">Hi I'm {userInfor.name}</h1>
            <h3 className="underline cursor-pointer text-lg">Edit profile</h3>
            <div className="flex flex-warp mt-8">
              <i className="fa-solid fa-star text-xl mr-1"></i>
              <h3 className="text-2xl">0 review</h3>
            </div>
            <div className="w-full">{renderTable(danhTrips)}</div>
          </div>
        </div>
      </div>
      <div>
        <FooterNav />
      </div>
    </div>
  );
}
