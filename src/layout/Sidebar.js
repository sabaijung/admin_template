import React from "react";

export default function Sidebar() {
  return (
    <div id="sidebar">
      <aside className="aside is-placed-left is-expanded">
        <div className="aside-tools">
          <div>
            CS <b className="font-black">@KRU</b>
          </div>
        </div>
        <div className="menu is-menu-main">
          <ul className="menu-list">
            <li className="--set-active-index-html">
              <a href="index.html">
                <span className="icon">
                  <i className="mdi mdi-desktop-mac"></i>
                </span>
                <span className="menu-item-label">แดชบอร์ด</span>
              </a>
            </li>
          </ul>
          <p className="menu-label">บริหารโครงการ</p>
          <ul className="menu-list">
            <li className="--set-active-tables-html">
              <a href="/MainProject">
                <span className="icon">
                  <i className="mdi mdi-table"></i>
                </span>
                <span className="menu-item-label">ข้อมูลโครงการ</span>
              </a>
            </li>
            <li className="--set-active-tables-html">
              <a href="/MainPlaining">
                <span className="icon">
                  <i className="mdi mdi-table"></i>
                </span>
                <span className="menu-item-label">แผนงานโครงการ</span>
              </a>
            </li>
          </ul>
          <p className="menu-label">ตั้งค่าระบบ</p>
          <ul className="menu-list">
            <li>
              <a
                href="/MainUser"
                className="has-icon"
              >
                <span className="icon">
                  <i className="mdi mdi-credit-card-outline"></i>
                </span>
                <span className="menu-item-label">ข้อมูลผู้ใช้งาน</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
