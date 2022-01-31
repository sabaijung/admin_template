import React from "react";
import SVGSave from "../../../assets/svg/SVGSave";
import SVGClockwise from "../../../assets/svg/SVGClockwise";

export default function FormUser() {
  return (
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
    </div>
  );
}
