import React from "react"
import { Formik, Form } from "formik";
import { TextField } from "../../../components/TextField";
import { ValidateAuthen } from "./ValidateAuthen"

export default function Authen() {
    return (
        <Formik
            initialValues={{
                username: "",
                password: "",
            }}
            enableReinitialize={true}
            validationSchema={ValidateAuthen}
            onSubmit={(value) => {
                // Authentication(value);
            }}
        >
            {({ errors, touched, values, handleChange, setFieldValue }) => (
                <Form>
                    <div className="w-full rounded-lg shadow-md  bg-gray-50">
                        <div className="flex justify-center my-10 font-bold">
                            <div className="px-12 pb-10 my-2">
                                <div className="w-full mb-2">
                                    <div className="py-2">
                                        <TextField
                                            name="username"
                                            title="ชื่อผู้ใช้งาน"
                                            type="text"
                                            onChange={handleChange}
                                            value={values.plainingName}
                                        />
                                        {/* <input
                                        value={values.username}
                                        type="text"
                                        placeholder="อีเมล"
                                        className={`input-login-2 ${errors.username && touched.username && "is-invalid bg-red-50"}`}
                                        onChange={(e) => {
                                            setFieldValue("username", e.target.value);
                                        }}
                                    />
                                    {errors.username && touched.username ? <div className="mt-1 input-error">{errors.username}</div> : null} */}
                                    </div>
                                </div>
                                <div className="w-full mb-2">
                                    <div className="py-2">
                                        <TextField
                                            name="password"
                                            title="รหัสผ่าน"
                                            type="password"
                                            onChange={handleChange}
                                            value={values.plainingName}
                                        />
                                        {/* <input
                                        value={values.password}
                                        type="password"
                                        id="input-pass"
                                        placeholder="รหัสผ่าน"
                                        className={`input-login-2 ${errors.password && touched.password && "is-invalid bg-red-50"}`}
                                        onChange={(e) => {
                                            setFieldValue("password", e.target.value);
                                        }}
                                    /> */}
                                    </div>
                                </div>
                                <a href="/#" className="float-right mb-4 text-xs text-gray-500">
                                    ลืมรหัสผ่าน?
                                </a>
                                <button className="mr-1 btn btn-green btn-sm">
                                    เข้าสู่ระบบ
                                </button>
                            </div>
                        </div>
                    </div>
                </Form>
            )
            }
        </Formik >
    )
}