import React from "react";
import SVGEdit from "../../../assets/svg/SVGEditV1";
import SVGDelete from "../../../assets/svg/SVGDeleteV1";

import Pagination from "../../../components/Pagination";

export default function ShowUser({ data, pagin, returnPageNumber }) {
  return (
    <div className="flex flex-col">
      <div className="div-tb">
        <table className="min-w-full">
          <thead className="bg-blue-500">
            <tr className="text-white">
              <th className="tb">ลำดับ</th>
              <th className="tb">รหัสผู้ใช้งาน</th>
              <th className="tb">ชื่อ-นามสกุล</th>
              <th className="tb">อีเมล</th>
              <th className="tb">สถานะ</th>
              <th className="tb">จัดการ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.map((item, idx) => (
              <tr key={idx}>
                <td className="tb-td">{(pagin.currentPage - 1) * pagin.pageSize + (idx + 1)}</td>
                <td className="tb-td">{item.code}</td>
                <td className="tb-td">{item.name + " " + item.lastname}</td>
                <td className="tb-td">{item.username}</td>
                <td className="tb-td">{item.isused === "1" ? "ใช้งาน" : "ไม่ใช้งาน"}</td>
                <td className="tb-td">
                  <div className="flex justify-start item-center">
                    <button>
                      {" "}
                      <SVGEdit color="none" />
                    </button>
                    <button
                    >
                      {" "}
                      <SVGDelete color="none" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        totalPage={pagin.totalPage}
        onChange={async (page) => {
          returnPageNumber(page);
        }}
        currentPages={pagin.currentPage}
        totalRow={pagin.totalRow}
      />
    </div>
  );
}
