import React, { useEffect } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import Icons from "../assets/icons/Icons";

Pagination.propTypes = {
  currentPages: PropTypes.number,
  totalPage: PropTypes.number,
};

Pagination.defaultProps = {
  currentPages: 1,
  totalPage: 1,
  onChange: (page) => {
    return page;
  },
};

export default function Pagination({ onChange, currentPages, totalPage, totalRow }) {
  const [currentPage, setCurrentPage] = React.useState(currentPages);

  useEffect(() => {
    setCurrentPage(currentPages);
  }, [currentPages]);

  let maxPages = totalPage;
  let items = [];
  let leftSide = 0;
  let rightSide = 0;

  if (maxPages <= 5) {
    leftSide = 1;
    rightSide = maxPages;
  } else if (currentPage <= 4) {
    leftSide = 1;
    rightSide = 5;
  } else if (currentPage + 2 >= maxPages) {
    leftSide = maxPages - 4;
    rightSide = maxPages;
  } else {
    leftSide = currentPage - 2;
    rightSide = currentPage + 2;
  }

  for (let number = leftSide; number <= rightSide; number++) {
    items.push(
      <div
        onClick={() => {
          setCurrentPage(number);
          onChange(number);
        }}
        key={number}
        className={
          "relative inline-flex items-center px-4 py-2 text-sm font-medium border cursor-pointer" +
          (number === currentPage ? " z-10  bg-blue-800 bg-red text-white  border-blue-800  " : "  border-gray-300  ")
        }
      >
        {number}
      </div>
    );
  }

  const nextPage = () => {
    if (currentPage < maxPages) {
      setCurrentPage(currentPage + 1);
      onChange(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      onChange(currentPage - 1);
    }
  };
  return (
    <div id={nanoid()} className={"flex items-center justify-between py-3  " + (totalRow === 0 ? "hidden" : "")}>
      <div className="flex justify-between flex-1 sm:hidden">
        <a
          href="#Previous"
          onClick={() => {
            prevPage();
          }}
          className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          ย้อนกลับ
        </a>
        <div className="mt-1 font-bold text-red-500 ">{currentPage}</div>
        <a
          href="#Next"
          onClick={() => {
            nextPage();
          }}
          className="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          ถัดไป
        </a>
      </div>
      <div className="flex-wrap hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm ">
            แสดง <span className="font-medium">{currentPage}</span> จาก <span className="font-medium">{totalPage}</span> หน้า
            (<span className="font-medium">ทั้งหมด {totalRow} รายการ</span> )
          </p>
        </div>
        <div>
          <nav className="relative z-0 inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <div
              onClick={() => {
                if (currentPage > 1) {
                  setCurrentPage(1);
                  onChange(1);
                }
              }}
              className="relative inline-flex items-center px-1 py-1 text-sm font-medium bg-white border border-gray-300 cursor-pointer rounded-l-md hover:bg-gray-50"
            >
              <Icons icon="chevron_left" color="" viewBox="0 0 24 24" size={20} className="w-6 h-7" />
              <span className="sr-only">หน้าแรก</span>
            </div>
            {items}
            <div
              onClick={() => {
                if (currentPage < maxPages) {
                  setCurrentPage(totalPage);
                  onChange(totalPage);
                }
              }}
              className="relative inline-flex items-center px-1 py-1 text-sm font-medium bg-white border border-gray-300 cursor-pointer rounded-r-md hover:bg-gray-50"
            >
              <span className="sr-only">หน้าสุดท้าย</span>
              <Icons icon="chevron_right" color="" viewBox="0 0 24 24" size={20} className="w-6 h-7" />
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
