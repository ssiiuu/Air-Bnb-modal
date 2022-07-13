import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import UserNav from '../../../../components/NavHeader/UserNav';
import { DOMAIN, TOKEN_CYBERSOFT } from '../../../../configUrl/configURL';
import "./Trips.css"


import FooterNav from '../../../Footer/Footer';
import InforTrips from '../InforTrips/InforTrips';
import MyPofolio from '../MyPofolio/MyPofolio';


export default function Trips() {
  let { id } = useParams();
  let userInfor = useSelector((state) => state.userReducer.userInfor);
  let history = useHistory();
  const handleClickTrangChu = () => {
    history.push("/");
  }
  const [danhTrips, setDanhTrips] = useState([]);
  useEffect(() => {
    axios({
      url: DOMAIN + `/api/tickets/by-user?userId=${id}`,
      method: "GET",
      headers: {
        tokenByClass: TOKEN_CYBERSOFT,
      },
    })
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
        return <InforTrips phong={phongItem} key={index} />
      }
    })
  }
  return (
    <div>
        <header className="sticky w-full top-0 left-0 right-0 bg-white transition duration-500  z-50 grid grid-cols-2 shadow-md p-5 md:px-10">
          {/* left */}
          <div className='relative flex items-center w-32 cursor-pointer my-auto'>
            <button className="outline-none border-none" onClick={handleClickTrangChu}>
              <img src="https://links.papareact.com/qd3" layout="fill" className="object-contain object-left" />
            </button>
          </div>


          {/* right */}
          <div className="flex items-center align-middle space-x-4 justify-end text-gray-500">
            <div className="hover:bg-gray-100 transition duration-150 rounded-full cursor-pointer">
              <button className="focus:outline-none hidden md:inline text-black p-2">Become a host</button>
            </div>
            <div className="hover:bg-gray-100 transition duration-150 rounded-full cursor-pointer">
              <button className="p-2 focus:outline-none"> <i className="fa-solid bg-white rounded-full fa-globe w-4" />
              </button>
            </div>
            <UserNav />
          </div>
        </header>
      <div className="mx-20 my-16">
        <div className="manager_pofolio">
        <div className="border rounded-lg block xl:sticky top-28 mr-10 my_pofolio">
          <MyPofolio />
        </div>
        <div className="my_trips">
          <h1 className="text-3xl">Hi I'm {userInfor.name}</h1>
          <h3 className="underline cursor-pointer text-lg">Edit profile</h3>
          <div className="flex flex-warp mt-8">
          <i class="fa-solid fa-star text-xl mr-1"></i>
          <h3 className="text-2xl">0 review</h3>
          </div>
          <div className="w-full">
        {renderTable(danhTrips)}
        </div>
        </div>
        </div>
      </div>
      <div>
        <FooterNav />
      </div>
    </div>
  )
}
