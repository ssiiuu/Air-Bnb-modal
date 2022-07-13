import React from "react";
import { Form, Input, Button, message} from "antd";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { DOMAIN, TOKEN_CYBERSOFT } from "../../configUrl/configURL";
import httpServ from "../../serviceWorker/http.service";
import UserNav from "../../components/NavHeader/UserNav";
import FooterNav from "../Footer/Footer";
import "./register.css"
export default function Register() {
    let history = useHistory();

    const handleClickTrangChu = () => {
        history.push("/");
    }

    const onFinish = (values) => {
        console.log("Success:", values);

        let data = { ...values };
        // axios({
        //     url: DOMAIN + "/api/auth/register",
        //     method: "POST",
        //     data: data,

        //     headers: {
        //         tokenByClass: TOKEN_CYBERSOFT,
        //     },
        // })
        httpServ
        .dangKi(data)
            .then((res) => {
                message.success("Đăng kí thành công");
                console.log("res",res);
                setTimeout(() => {
                    history.push("/login");
                }, 3000);
            })
            .catch((err) => {
                message.error(err.message);
                console.log("err",err);
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

        <div className="h-full w-full flex items-center pt-10 pb-10 register_back">
            <div className="w-full justify-center xl:mr-96 xl:ml-96 mr-0 ml-0 lg:ml-64 lg:mr-64 md:mr-32 md:ml-32 sm:mr-20 sm:ml-20 container bg-white rounded-lg">
                <h1 className="font-bold text-2xl text-center mb-5 mt-10">Register</h1>
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
                >
                    <Form.Item
                        label="Full Name"
                        name="name"
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
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        label="Phone"
                        name="phone"
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
                        label="Birthday"
                        name="birthday"
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
                        label="Gender"
                        name="gender"
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
                        label="Address"
                        name="address"
                        rules={[
                            {
                                required: true,
                                message: "Trường này không được để rỗng!",
                            },
                        ]}
                    >
                        <Input />
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
            </div>
            </div>
            <FooterNav />
        </div>
    );
}
