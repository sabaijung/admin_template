import React, { Fragment, useState } from "react";
import SVGEdit from "../../../assets/svg/SVGEditV1";
import SVGDelete from "../../../assets/svg/SVGDeleteV1";

export default function ShowPlaining() {
  let [isOpen, setIsOpen] = useState("");
  return (
    <div className="flex flex-col">
      <div className="div-tb">
        <table className="min-w-full">
          <thead className="bg-blue-500">
            <tr className="text-white">
              <th className="tb">ลำดับ</th>
              <th className="tb">ชื่อแผนงาน</th>
              <th className="tb">วันที่เริ่มต้น</th>
              <th className="tb">วันที่สิ้นสุด</th>
              <th className="tb">ระยะเวลา(วัน)</th>
              <th className="tb">สถานะ</th>
              <th className="tb">จัดการ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr
              className="cursor-pointer hover:bg-blue-100"
            >
              <td>
                <div className="flex items-center justify-center leading-5 align-middle">
                  <div
                    onClick={() => {
                      setIsOpen("");
                    }}
                    className="cursor-pointer "
                  >
                    <i className="fas fa-plus-circle"></i>
                  </div>
                </div>
              </td>
              <td>ไว้สำหรับแสดงแผนงานหลัก</td>
            </tr>

            <tr>
              <td className="tb-td">ทดสอบ</td>
              <td className="tb-td">dsfd</td>
              <td className="tb-td">dsfd</td>
              <td className="tb-td">dsfd</td>
              <td className="tb-td">dsfd</td>
              <td className="tb-td">dsfd</td>
              <td className="tb-td">
                <div className="flex justify-start item-center">
                  <button>
                    {" "}
                    <SVGEdit color="none" />
                  </button>
                  <button>
                    {" "}
                    <SVGDelete color="none" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
