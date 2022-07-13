import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import NavHeader from '../../components/NavHeader/NavHeader'
import UserNav from '../../components/NavHeader/UserNav'
import { DOMAIN, TOKEN_CYBERSOFT } from '../../configUrl/configURL'
import { localServe } from '../../Services/LocalServe'
import httpServ from '../../serviceWorker/http.service'
import localStorageServ from '../../serviceWorker/locaStorage.service'
import FooterNav from '../Footer/Footer'
import InforCard from '../InforCard/InforCard'
import MapAp from '../Map/Map'
import "./search.css"

export default function SearchLo() {
    const [dataLo, setDataLo] = useState([]);
    const [dataSe, setDataSe] = useState([]);
    let history = useHistory();

    const handleClickTrangChu=()=> {
        history.push("/");
    }

    useEffect(() => {
      httpServ
      .layDanhSachPhong()
            .then((res) => {
                console.log(res);
                setDataLo(res.data);
                setDataSe(localStorageServ.keySearch.get());
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    console.log("Location", dataSe);
    const renderRoom = (danhSachPhong) => {
        return danhSachPhong.map((phong, index) => {
            if (phong.locationId!=null && phong.locationId.province===dataSe) {
                return <InforCard data={phong} key={index} />
            }
        })
    }
    return  (
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
            <main className="flex mb-3">
                <section className="flex-grow pt-14 px-6">
                    <p className="text-xs">300+ Stays for 5 number of guests</p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in Mars</h1>
                    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                        <p className="button">Cancellation Flexibility</p>
                        <p className="button">Type of Place</p>
                        <p className="button">Price</p>
                        <p className="button">Rooms and Beds</p>
                        <p className="button">More filters</p>
                    </div>
                    <div className="flex flex-col">
                        {renderRoom(dataLo)}
                    </div>
                </section>
                <section className="search_map">
                <div className="sticky top-20 w-full search_icon_map">
                    <MapAp />
                    </div>
                </section>
            </main>
            <FooterNav />
        </div>
    )
}
