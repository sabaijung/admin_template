import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
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
import { SaveUser, UserDetail, UpdateUser } from "../../../services/Users.Service";

export default function FormUser() {
  const history = useHistory();

  const [code, setCode] = useState(null);
  const [dataUser, setDataUser] = useState([]);
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
    let code = new URLSearchParams(history.location.search).get("code");
    if (code != null) {
      setCode(code);
      getUserDetail(code);
    }
    LoadDepartment();

  }, [history.location.search]);

  async function getUserDetail(code) {
    let result = await UserDetail(code);
    setDataUser(result.data);
  }

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

  const CreateUser = async (v) => {
    let result = await SaveUser(v);
    if (result.statusCode === 200) {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: 'บันทึกข้อมูลสำเร็จ',
        showConfirmButton: false,
        timer: 500,
      });
      history.push("/MainUser");
    } else {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "บันทึกไม่ข้อมูลสำเร็จ",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const Update = async (values, prmCode) => {
    let result = await UpdateUser(values, prmCode);
    // console.log("update");
    //  console.log("up:" + JSON.stringify(result));
    if (result.statusCode === 200) {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: 'ปรับปรุงข้อมูลเรียบร้อยแล้ว',
        showConfirmButton: false,
        timer: 500,
      });
      history.push("/MainUser");
    } else {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "ไม่สามารถแก้ไขข้อมูลได้",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }

  function showPass() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
      document.getElementById("show-Icon").innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#1d4ed8"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>';
    } else {
      x.type = "password";
      document.getElementById("show-Icon").innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#1d4ed8"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>';
    }
  }

  return (
    <Formik
      initialValues={{
        prefix: code != null ? dataUser.initialCode : "",
        name: code != null ? dataUser.name : "",
        lastname: code != "" ? dataUser.lastname : "",
        departmentCode: code != null ? dataUser.departmentCode : "",
        positionCode: code != null ? dataUser.positionCode : "",
        mobilePhone: code != null ? dataUser.mobilephone : "",
        address: code != null ? dataUser.address : "",
        province: code != null ? dataUser.provinceCode : "",
        district: code != null ? dataUser.amphurCode : "",
        subDistrict: code != null ? dataUser.districtCode : "",
        zipCode: code != null ? dataUser.postcode : "",
        username: code != null ? dataUser.username : "",
        password: code != null ? dataUser.password : "",
        confirmPassword: code != null ? dataUser.password : "",
        role: code != null ? dataUser.role : "",
        isUsed: code != null ? dataUser.isused : "",
      }}
      enableReinitialize={true}
      // validationSchema={ValidateUser}
      onSubmit={async (values) => {
        //   console.log("dt:" + JSON.stringify(values))
        if (code == null) {
          CreateUser(values);
          console.log("create");
        } else {
          console.log("update");
          Update(values, code);
        }
      }}
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
                <button className="mr-1 btn btn-green btn-sm" type="submit">
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
                      {/* <img
                        alt=""
                        src=""
                        className="w-40 h-40 rounded-full"
                        onError=""
                      /> */}
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
                    title="ชื่อ"
                    name="name"
                    type="text"
                    value={values.name || ""}
                    onChange={handleChange}
                  />
                </div>
                <div className="pr-2 mt-2 md:w-2/5">
                  <TextField
                    title="นามสกุล"
                    name="lastname"
                    type="text"
                    value={values.lastname || ""}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex flex-wrap justify-start w-full">
                  <div className="pr-2 mt-2 md:w-1/3">
                    <TextSelect
                      title="แผนก"
                      options={department}
                      onChange={(e) => {
                        setFieldValue("departmentCode", e.departmentCode);
                        console.log("dept:" + values.departmentCode);
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
                      value={values.mobilePhone || ""}
                      errors={errors}
                      touched={touched}
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
                      value={values.address || ""}
                    />
                  </div>
                  <div className="pr-2 mt-2 md:w-4/12">
                    <TextSelect
                      title="จังหวัด"
                      placeholder="กรุณาเลือกจังหวัด"
                      options={dtProvince.province}
                      onChange={(e) => {
                        if (e !== null) {
                          setFieldValue("province", e.Id);
                          setDataProvince(e.Id);
                        }
                      }}
                      value={dtProvince.province.filter(
                        (e) => e.Id === values.province
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
                        (e) => e.Id === values.district
                      )}
                      onChange={(e) => {
                        if (e !== null) {
                          setFieldValue("district", e.Id);
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
                        (e) => e.Id === values.subDistrict
                      )}
                      onChange={(e) => {
                        if (e !== null) {
                          setFieldValue("subDistrict", e.Id);
                          setFieldValue("zipCode", e.ZipCode.toString());
                        }
                      }}
                      onBlur={handleBlur}
                      getOptionLabel={(x) => x.NameInThai}
                      getOptionValue={(x) => x.Id}
                      name="subDistrict"
                    />
                  </div>
                  <div className="pr-2 mt-2 md:w-4/12">
                    <TextField
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="text"
                      name="zipCode"
                      value={values.zipCode || ""}
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
                      value={values.username || ""}
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
                        value={values.password || ""}

                      />
                      <div className="flex justify-end m-2 mr-3 -mt-7">
                        <button type="button" className="focus:outline-none" id="show-Icon" onClick={showPass}>
                          <i className="fas fa-eye-slash"></i>
                        </button>
                      </div>
                      {errors.password && touched.password ? <div className="-mt-1 input-error">{errors.password}</div> : null}
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
                        value={values.confirmPassword || ""}
                      />
                      <div className="flex justify-end m-2 mr-3 -mt-7">
                        <button type="button" className="focus:outline-none" id="show-IconConfirm" >
                          <i className="fas fa-eye-slash"></i>
                        </button>
                      </div>
                      {errors.confirmPassword && touched.confirmPassword ? <div className="-mt-1 input-error">{errors.confirmPassword}</div> : null}
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
                          className={`${touched.role && errors.role && "is-invalid-radio"}`}
                          name="role"
                          value={1}
                          checked={values.role === "1"}
                          onChange={(e) => {
                            setFieldValue("role", e.target.value);
                          }}

                        />
                        <label htmlFor="one" className="cursor-pointer">
                          ผู้ดูแลระบบ
                        </label>
                      </label>
                      <label className="items-center cursor-pointer md:inline-flex ">
                        <input
                          type="radio"
                          id="two"
                          className={`${touched.role && errors.role && "is-invalid-radio"}`}
                          name="role"
                          onChange={(e) => {
                            setFieldValue("role", e.target.value);
                          }}
                          value={2}
                          checked={values.role === "2"}
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
                          className={`${touched.isUsed && errors.isUsed && "is-invalid-radio"}`}
                          name="isUsed"
                          value={1}
                          checked={values.isUsed === "1"}
                          onChange={(e) => {
                            setFieldValue("isUsed", e.target.value);
                          }}
                        />
                        <label htmlFor="IsUseone-1" className="cursor-pointer">
                          ใช้งาน
                        </label>
                      </label>
                      <label className="items-center cursor-pointer md:inline-flex ">
                        <input
                          id="IsUseone-2"
                          type="radio"
                          className={`${touched.isUsed && errors.isUsed && "is-invalid-radio"}`}
                          name="isUsed"
                          value={0}
                          checked={values.isUsed === "0"}
                          onChange={(e) => {
                            setFieldValue("isUsed", e.target.value);
                          }}
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
