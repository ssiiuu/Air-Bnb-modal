import React from "react";
import { Form, Input, Button, message } from "antd";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { DOMAIN, TOKEN_CYBERSOFT } from "../../configUrl/configURL";
import { SET_USER_INFOR } from "../../redux/Constants/userConstant";
import { localServe } from "../../Services/LocalServe";
import { useDispatch } from "react-redux";
import httpServ from "../../serviceWorker/http.service";
import localStorageServ from "../../serviceWorker/locaStorage.service";
import "./Login.css"
import UserNav from "../../components/NavHeader/UserNav";
import NavHeader from "../../components/NavHeader/NavHeader";
import FooterNav from "../Footer/Footer";
export default function Login() {
    let history = useHistory();
    let dispatch = useDispatch();
    const handleClickTrangChu = () => {
        history.push("/");
    }

    const handleClickLog=()=>{
        history.push("/register");
    }

    const onFinish = (values) => {
        console.log("Success:", values);

        let data = { ...values };
        // axios({
        //     url: DOMAIN + "/api/auth/login",
        //     method: "POST",
        //     data: data,

        //     headers: {
        //         tokenByClass: TOKEN_CYBERSOFT,
        //     },
        // })
        httpServ
            .dangNhap(data)
            .then((res) => {
                message.success("Đăng nhập thành công");
                console.log("res", res);

                dispatch({
                    type: SET_USER_INFOR,
                    payload: res.data.user,
                })

                //localServe.setUserInfor(res.data.user);
                localStorageServ.userInfor.set(res.data.user);

                setTimeout(() => {
                    history.push("/");
                }, 3000);
            })
            .catch((err) => {
                message.error(err.message);
            });
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

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
            <div className="login_big w-full h-full flex justify-center pt-48 pb-48">
                <div className="w-full justify-center xl:mr-96 xl:ml-96 mr-0 ml-0 lg:ml-64 lg:mr-64 md:mr-32 md:ml-32 sm:mr-20 sm:ml-20 container">
                    <div className="img_form">
                        <h1 className="font-bold text-2xl text-center mb-5">LOGIN</h1>
                        <Form
                            name="basic"
                            labelCol={{
                                span: 4,
                            }}
                            wrapperCol={{
                                span: 24,
                            }}
                            initialValues={{
                                remember: true,
                            }}
                            layout="vertical"
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                            width={"400px"}
                        >

                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: "Trường này không được để rỗng!",
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: "Trường này không được để rỗng!",
                                    },
                                ]}
                            >
                                <Input.Password  />
                            </Form.Item>

                            <Form.Item>
                                <Button
                                    className="mx-auto block bg-red-600 text-white rounded  cursor-pointer"
                                    htmlType="submit"
                                >
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                        <div>
                            <div className="text-right">
                                <button className="focus:outline-none hover:underline">Forgot password?</button>
                            </div>
                            <div className="text-center">
                                <p className="text-slate-100">Or Sign Up Using</p>
                                <div className="flex justify-center">
                                    <div className="mr-2">
                                        <i className="fa-brands fa-facebook text-2xl" />
                                    </div>
                                    <div className="mr-2">
                                        <i className="fa-brands fa-twitter text-2xl" />
                                    </div>
                                    <div>
                                        <i className="fa-brands fa-google text-2xl" />
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-10">
                                <p>Or Sign Up Using</p>
                                <button className="focus:outline-none" onClick={handleClickLog}>
                                    <p className="hover:underline">SIGN UP</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <FooterNav />
        </div>
    );
}
