import React from "react";
import { Formik, Form } from "formik";
import SVGSave from "../../../assets/svg/SVGSave";
import SVGClockwise from "../../../assets/svg/SVGClockwise";
//import TextSelect from "../../../components/TextSelect";
import { TextField } from "../../../components/TextField";

export default function FormUser() {
  return (
    <Formik>
      {() => (
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
                  <TextField
                    title="คำนำหน้าชื่อ"
                    name="prefix"
                    type="text"
                    onChange=""
                    value=""
                  />
                </div>
                <div className="pr-2 mt-2 md:w-2/5">
                  <TextField
                    name="firstName"
                    title="ชื่อ"
                    type="text"
                    onChange=""
                    value=""
                  />
                </div>
                <div className="pr-2 mt-2 md:w-2/5">
                  <TextField
                    title="นามสกุล"
                    name="lastName"
                    type="text"
                    onChange=""
                    value=""
                  />
                </div>
                <div className="flex flex-wrap justify-start w-full">
                  <div className="pr-2 mt-2 md:w-1/3">
                    <TextField
                      title="แผนก"
                      name="department"
                      type="text"
                      onChange=""
                      value=""
                    />
                  </div>
                  <div className="pr-2 mt-2 md:w-1/3">
                    <TextField
                      name="position"
                      title="ตำแหน่ง"
                      type="text"
                      onChange=""
                      value=""
                    />
                  </div>
                  <div className="pr-2 mt-2 md:w-1/3">
                    <TextField
                      title="เบอร์โทรศัพท์มือถือ"
                      name="mobilephone"
                      type="text"
                      onChange=""
                      value=""
                    />
                  </div>
                </div>
                <div className="flex flex-wrap justify-start w-full">
                  <div className="pr-2 mt-2 md:w-4/12">
                    <TextField
                      title="ที่อยู่"
                      name="address"
                      type="text"
                      onChange=""
                      onBlur=""
                      value=""
                    />
                  </div>
                  <div className="pr-2 mt-2 md:w-4/12">
                    <TextField
                      onChange=""
                      onBlur=""
                      type="text"
                      name="zipCode"
                      value=""
                      title="จังหวัด"
                      maxLength="5"
                      readOnly
                    />
                  </div>
                  <div className="pr-2 mt-2 md:w-4/12">
                    <TextField
                      onChange=""
                      onBlur=""
                      type="text"
                      name="zipCode"
                      value=""
                      title="อำเภอ"
                      maxLength="5"
                      readOnly
                    />
                  </div>
                  <div className="pr-2 mt-2 md:w-4/12">
                    <TextField
                      onChange=""
                      onBlur=""
                      type="text"
                      name="zipCode"
                      value=""
                      title="ตำบล"
                      maxLength="5"
                      readOnly
                    />
                  </div>
                  <div className="pr-2 mt-2 md:w-4/12">
                    <TextField
                      onChange=""
                      onBlur=""
                      type="text"
                      name="zipCode"
                      value=""
                      title="รหัสไปรษณีย์"
                      maxLength="5"
                      readOnly
                    />
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
