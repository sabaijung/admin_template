import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import SVGSave from "../../../assets/svg/SVGSave";
import SVGClockwise from "../../../assets/svg/SVGClockwise";
import { TextSelect } from "../../../components/TextSelect";
import { TextField } from "../../../components/TextField";
import { default as dtProvince } from "../../../helper/JsonData/province.json";
import { default as dtDistrict } from "../../../helper/JsonData/district.json";
import { default as dtSubDistrict } from "../../../helper/JsonData/subdistrict.json";
import { ValidateUser } from "./ValidateUser";

/* import service */
import { GetDepartment } from "../../../services/Department.Service";
import { GetPosition } from "../../../services/Position.Service";


export default function FormUser() {
  const [department, setDataDepartment] = useState([]);
  const [position, setDataPosition] = useState([]);
  const [dataProvince, setDataProvince] = useState(null);
  const [dataDistrict, setDataDistrict] = useState(null);

  const prefixTH = [
    { id: "1", name: "นาย" },
    { id: "2", name: "นาง" },
    { id: "3", name: "นางสาว" },
  ];

  useEffect(() => {
    LoadDepartment();
  }, []);

  async function LoadDepartment() {
    let result = await GetDepartment();
    if (result !== undefined) {
      setDataDepartment(result);
    } else {
      setDataDepartment([]);
    }
  }

  async function LoadPosition(departmentCode) {
    let rsPosition = await GetPosition(departmentCode);
    setDataPosition(rsPosition);
  }

  return (
    <Formik
      initialValues={{
        prefix: "",
        firstName: "",
        lastName: "",
        departmentCode: "",
        positionCode: "",
        mobilePhone: "",
        address: "",
        province: "",
        district: "",
        subDistrict: "",
        zipCode: "",
        username: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={ValidateUser}
    >
      {({
        errors,
        touched,
        values,
        handleChange,
        handleBlur,
        setFieldValue,
      }) => (
        <Form>
          <div>
            <div className="flex flex-wrap mx-auto">
              <div className="w-full pr-2 md:w-1/2">
                <h1 className="text-blue-500">เพิ่มข้อมูลผู้ใช้งาน</h1>
              </div>
              <div className="flex justify-end mx-auto mt-2 md:w-1/2">
                <button className="mr-1 btn btn-green btn-sm">
                  <SVGSave color="white" /> &nbsp;บันทึก
                </button>
                <button className="mr-1 btn btn-gray btn-sm">
                  <SVGClockwise color="white" /> &nbsp;ล้างค่า
                </button>
              </div>
            </div>
            <div className="mt-2 bg-white border-b border-l border-r border-gray-400" />

            <div className="mt-2 flex flex-wrap justify-between">
              <div className="pr-3 md:w-1/4">
                <label className="field-label">รูปโปรไฟล์</label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col w-full border-2 border-gray-200 border-dashed rounded-md h-60 hover:bg-gray-50 hover:border-gray-300">
                    <div className="flex flex-col items-center justify-center pt-7">
                      <img
                        alt=""
                        src=""
                        className="w-40 h-40 rounded-full"
                        onError=""
                      />
                    </div>
                  </label>
                </div>
              </div>
              <div className="flex flex-wrap justify-between md:w-3/4">
                <div className="pr-2 mt-2 md:w-1/5">
                  <TextSelect
                    title="คำนำหน้าชื่อ"
                    options={prefixTH}
                    onChange={(e) => {
                      setFieldValue("prefix", e.id);
                    }}
                    getOptionLabel={(x) => x.name}
                    getOptionValue={(x) => x.id}
                    name="prefix"
                    placeholder="คำนำหน้าชื่อ"
                    onBlur={handleBlur}
                    value={prefixTH.filter((e) => e.id === values.prefix)}
                  />
                </div>
                <div className="pr-2 mt-2 md:w-2/5">
                  <TextField
                    name="firstName"
                    title="ชื่อ"
                    type="text"
                    onChange={handleChange}
                    value={values.firstName}
                  />
                </div>
                <div className="pr-2 mt-2 md:w-2/5">
                  <TextField
                    title="นามสกุล"
                    name="lastName"
                    type="text"
                    onChange={handleChange}
                    value={values.lastName}
                  />
                </div>
                <div className="flex flex-wrap justify-start w-full">
                  <div className="pr-2 mt-2 md:w-1/3">
                    <TextSelect
                      title="แผนก"
                      options={department}
                      onChange={(e) => {
                        setFieldValue("departmentCode", e.departmentCode);
                        LoadPosition(e.departmentCode);
                      }}
                      getOptionLabel={(x) => x.departmentName}
                      getOptionValue={(x) => x.departmentCode}
                      name="departmentCode"
                      placeholder="แผนก"
                      onBlur={handleBlur}
                      value={department.filter((e) => e.departmentCode === values.departmentCode)}

                    />
                  </div>
                  <div className="pr-2 mt-2 md:w-1/3">
                    <TextSelect
                      title="ตำแหน่ง"
                      options={position}
                      onChange={(e) => {
                        setFieldValue("positionCode", e.positionCode);
                      }}
                      getOptionLabel={(x) => x.positionName}
                      getOptionValue={(x) => x.positionCode}
                      name="positionCode"
                      onBlur={handleBlur}
                      placeholder="ตำแหน่ง"
                      value={position.filter((e) => e.positionCode === parseInt(values.positionCode))}
                    />
                  </div>
                  <div className="pr-2 mt-2 md:w-1/3">
                    <TextField
                      title="เบอร์โทรศัพท์มือถือ"
                      name="mobilePhone"
                      type="text"
                      onChange={handleChange}
                      value={values.mobilePhone}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap justify-start w-full">
                  <div className="pr-2 mt-2 md:w-4/12">
                    <TextField
                      title="ที่อยู่"
                      name="address"
                      type="text"
                      onChange={handleChange}
                      value={values.address}
                    />
                  </div>
                  <div className="pr-2 mt-2 md:w-4/12">
                    <TextSelect
                      title="จังหวัด"
                      placeholder="กรุณาเลือกจังหวัด"
                      options={dtProvince.province}
                      onChange={(e) => {
                        if (e !== null) {
                          setFieldValue("province", e.NameInThai);
                          setDataProvince(e.Id);
                        }
                      }}
                      value={dtProvince.province.filter(
                        (e) => e.NameInThai === values.province
                      )}
                      onBlur={handleBlur}
                      getOptionLabel={(x) => x.NameInThai}
                      getOptionValue={(x) => x.Id}
                      name="province"
                    />
                  </div>
                  <div className="pr-2 mt-2 md:w-4/12">
                    <TextSelect
                      title="อำเภอ"
                      placeholder="กรุณาเลือกอำเภอ"
                      options={dtDistrict.district.filter(
                        (x) => x.ProvinceId === dataProvince
                      )}
                      value={dtDistrict.district.filter(
                        (e) => e.NameInThai === values.district
                      )}
                      onChange={(e) => {
                        if (e !== null) {
                          setFieldValue("district", e.NameInThai);
                          setDataDistrict(e.Id);
                        }
                      }}
                      onBlur={handleBlur}
                      getOptionLabel={(x) => x.NameInThai}
                      getOptionValue={(x) => x.Id}
                      name="district"
                    />
                  </div>
                  <div className="pr-2 mt-2 md:w-4/12">
                    <TextSelect
                      title="ตำบล"
                      placeholder="กรุณาเลือกตำบล"
                      options={dtSubDistrict.subDistrict.filter(
                        (x) => x.DistrictId === dataDistrict
                      )}
                      value={dtSubDistrict.subDistrict.filter(
                        (e) => e.NameInThai === values.subDistrict
                      )}
                      onChange={(e) => {
                        if (e !== null) {
                          setFieldValue("subDistrict", e.NameInThai);
                          setFieldValue("zipCode", e.ZipCode.toString());
                        }
                      }}
                      onBlur={handleBlur}
                      getOptionLabel={(x) => x.NameInThai}
                      getOptionValue={(x) => x.NameInThai}
                      name="subDistrict"
                    />
                  </div>
                  <div className="pr-2 mt-2 md:w-4/12">
                    <TextField
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="text"
                      name="zipCode"
                      value={values.zipCode}
                      title="รหัสไปรษณีย์"
                      maxLength="5"
                      readOnly
                    />
                  </div>
                </div>

                <div className="flex justify-start w-full">
                  <div className="pr-2 mt-2 md:w-4/12">
                    <TextField
                      title="ชื่อผู้ใช้งาน ( อีเมล )"
                      name="username"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.username}
                      placeholder="e@mail.com"
                    />
                  </div>
                  <div className="pr-2 mt-2 md:w-4/12">
                    <label className="field-label">รหัสผ่าน</label>
                    <div>
                      <input
                        className={`field-input ${errors.password && touched.password && "is-invalid"
                          }`}
                        id="password"
                        name="password"
                        type="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />
                      <div className="flex justify-end m-2 mr-3 -mt-7">
                        <button
                          type="button"
                          className="focus:outline-none"
                          id="show-Icon"
                        ></button>
                      </div>
                    </div>
                  </div>
                  <div className="pr-2 mt-2 md:w-4/12">
                    <label className="field-label">ยืนยันรหัสผ่าน</label>
                    <div>
                      <input
                        className={`field-input ${errors.confirmPassword &&
                          touched.confirmPassword &&
                          "is-invalid"
                          }`}
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.confirmPassword}
                      />
                      <div className="flex justify-end m-2 mr-3 -mt-7">
                        <button
                          type="button"
                          className="focus:outline-none"
                          id="show-IconConfirm"
                        ></button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-start w-full">
                  <div className="pr-2 mt-2 md:w-4/12">
                    <label className="field-label">สิทธิ์การใช้งาน</label>
                    <div className="mt-1">
                      <label className="items-center mr-5 cursor-pointer md:inline-flex ">
                        <input
                          type="radio"
                          id="one"
                          className=""
                          name="role"
                          value=""
                        />
                        <label htmlFor="one" className="cursor-pointer">
                          ผู้ดูแลระบบ
                        </label>
                      </label>
                      <label className="items-center cursor-pointer md:inline-flex ">
                        <input
                          type="radio"
                          id="two"
                          className=""
                          name="role"
                          value=""
                        />
                        <label htmlFor="two" className="cursor-pointer">
                          ผู้ใช้งาน
                        </label>
                      </label>
                    </div>
                  </div>
                  <div className="pr-2 mt-2 md:w-4/12">
                    <label className="field-label">สถานะการใช้งาน</label>
                    <div className="mt-1">
                      <label className="items-center mr-5 cursor-pointer md:inline-flex">
                        <input
                          type="radio"
                          id="IsUseone-1"
                          className=""
                          name="isUse"
                          value=""
                        />
                        <label htmlFor="IsUseone-1" className="cursor-pointer">
                          ใช้งาน
                        </label>
                      </label>
                      <label className="items-center cursor-pointer md:inline-flex ">
                        <input
                          id="IsUseone-2"
                          type="radio"
                          className=""
                          name="isUse"
                          value=""
                        />
                        <label htmlFor="IsUseone-2" className="cursor-pointer">
                          ไม่ใช้งาน
                        </label>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
