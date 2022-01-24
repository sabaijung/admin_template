import React from "react";

export default function Sidebar() {
  return (
    <div>
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
          <p className="menu-label">ระบบขาย</p>
          <ul className="menu-list">
            <li className="--set-active-tables-html">
              <a href="tables.html">
                <span className="icon">
                  <i className="mdi mdi-table"></i>
                </span>
                <span className="menu-item-label">ใบเสนอราคา</span>
              </a>
            </li>
          </ul>
          <p className="menu-label">ระบบซื้อ</p>
          <ul className="menu-list">
            <li>
              <a
                href="https://justboil.me"
                onClick="alert('Coming soon'); return false"
                target="_blank"
                className="has-icon"
              >
                <span className="icon">
                  <i className="mdi mdi-credit-card-outline"></i>
                </span>
                <span className="menu-item-label">ข้อมูลการสั่งซื้อ</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
