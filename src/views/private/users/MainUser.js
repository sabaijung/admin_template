import React, { useState, useEffect } from "react";
import ShowUser from "./ShowUser";
import SVGAdd from "../../../assets/svg/SVGAdd";
import SVGClockwise from "../../../assets/svg/SVGClockwise";
import SVGSearch from "../../../assets/svg/SVGSearch";
import { useHistory } from "react-router";
import Swal from "sweetalert2";

import { GetUsers, DeleteUser } from "../../../services/Users.Service"

export default function MainUser() {
  const history = useHistory();

  const [data, setData] = useState([]);
  const [pagin, setPagin] = useState({
    currentPage: 1,
    pageSize: 0,
    TotalRows: 0,
    TotalPages: 0,
  });

  const [loading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState("");

  function setCurrentPage(currentPage) {
    loadData(currentPage, pagin.pageSize, keyword);
  }

  useEffect(() => {
    loadData(1, 10, "");
  }, []);

  async function loadData(currentPage, pageSize, search) {
    setLoading(true);
    let result = await GetUsers(currentPage, pageSize, search);

    if (result) {
      setData(result.data);
      setPagin(result.pagin);
      setLoading(false);
    } else {
      setData([]);
      setPagin({
        currentPage: 1,
        pageSize: 0,
        TotalRows: 0,
        TotalPages: 0,
      });
    }
  }

  function deleteUser(code) {
    Swal.fire({
      title: "คุณต้องการลบข้อมูลนี้ใช่หรือไม่?",
      showDenyButton: true,
      confirmButtonText: "ตกลง",
      denyButtonText: "ยกเลิก",
      confirmButtonColor: "#2648C1",
      denyButtonColor: "#6e7881",
      icon: "question",
    }).then(async (result) => {
      if (result.isConfirmed) {
        let result = await DeleteUser(code);
        if (result.statusCode === 200) {
          Swal.fire({
            title: "ลบข้อมูลสำเร็จ",
            text: "",
            showConfirmButton: false,
            timer: 1500,
            icon: "success",
          });
        }
      }
    });
  }


  return (
    <div>
      <div className="flex flex-wrap mx-auto">
        <div className="w-full pr-2 mb-2 md:w-1/2">
          <h4 className="text-blue-500">
            <strong>ข้อมูลผู้ใช้งาน</strong>
          </h4>
        </div>
        <div className="w-full pr-2 mb-2 text-right md:w-1/2">
          <button
            className="mr-1 btn btn-green btn-sm"
            onClick={() => {
              history.push("/MainUser/FormUser");
            }}
          >
            {" "}
            <SVGAdd color="white" /> &nbsp;เพิ่มใหม่
          </button>
        </div>
      </div>
      <div className="mt-2 bg-white border-b border-l border-r border-gray-400"></div>

      <div className="mt-10">
        <div className="flex ">
          <div className="w-full">
            <div className="flex flex-wrap mx-auto justify-left">
              <div className="w-full pr-2 mb-2 md:w-1/4">
                <input
                  className="field-input"
                  placeholder="ค้นหาชื่อผู้ใช้งาน"
                />
              </div>
              <div className="w-full pr-2 mb-2 md:w-1/4">
                <button className="mr-1 btn btn-green btn-md">
                  {" "}
                  <SVGSearch color="white" />
                  ค้นหา
                </button>
                <button className="btn btn-gray btn-md">
                  {" "}
                  <SVGClockwise color="white" />
                  ล้างค่า
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-1">
        <ShowUser
          data={data}
          pagin={pagin}
          returnPageNumber={(number) => {
            setCurrentPage(number);
          }}
          returnDelete={(code) => {
            deleteUser(code);
          }}
        />
      </div>
    </div>
  );
}
