import React from "react";
import SVGEdit from "../../../assets/svg/SVGEditV1";
import SVGDelete from "../../../assets/svg/SVGDeleteV1";

export default function ShowProject() {
  return (
    <div className="flex flex-col">
      <div className="div-tb">
        <table className="min-w-full">
          <thead className="bg-blue-500">
            <tr className="text-white">
              <th className="tb">ลำดับ</th>
              <th className="tb">ชื่อโครงการ</th>
              <th className="tb">วันที่เริ่มโครงการ</th>
              <th className="tb">วันที่สิ้นสุดโครงการ</th>
              <th className="tb">สถานะ</th>
              <th className="tb">จัดการ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="tb-td">ทดสอบ</td>
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
