import React, { useEffect, useRef, Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import SVGAvatar from "../../assets/svg/SVGAvatar";
import SVGUser from "../../assets/svg/SVGUser";
import SVGLogout from "../../assets/svg/SVGLogout";
import clickShowSide from '../../scripts/SidebarScript';

export default function Navbar() {
  const [changSideBar, setChangSideBar] = useState('');
  return (
    <Fragment>
      <nav id="navbar-main" className="navbar is-fixed-top">
        <div className="navbar-brand">
          <a
            href="#sidebar"
            className="ml-5 mt-4 nav-link nav-link-lg"
            onClick={() => {
              clickShowSide(changSideBar);
              var x = window.matchMedia('(max-width: 1024px)');
              if (x.matches) {
                changSideBar === '' ? setChangSideBar('main-sidebar-mobile') : setChangSideBar('');
              } else {
                changSideBar === '' ? setChangSideBar('sidebar-mini-ct') : setChangSideBar('');
              }
            }}
          >
            <i className="fas fa-bars"></i>
          </a>
          <a className="navbar-item mobile-aside-button">
            {/* <span className="icon">
              <i className="mdi mdi-forwardburger mdi-24px"></i>
            </span> */}
          </a>

        </div>
        <div className="navbar-brand is-right">
          <a
            className="navbar-item --jb-navbar-menu-toggle"
            data-target="navbar-menu"
          >
            <span className="icon">
              <i className="fas fa-bars"></i>
              {/* <i className="mdi mdi-dots-vertical mdi-24px"></i> */}
            </span>
          </a>
        </div>
        <div className="navbar-menu" id="navbar-menu">
          <div className="navbar-end">
            <Menu as="div" className="mt-3 mr-5">
              <Menu.Button className="flex gap-2 px-2 font-bold rounded-md hover:text-blue-800 hover:bg-blue-100">
                <SVGAvatar /> Administrator
              </Menu.Button>
              <Menu.Items className="absolute right-0 z-20 w-56 mt-3 mr-2 bg-white border border-gray-500 border-opacity-25 rounded-md shadow-2xl dark:bg-gray-800">
                <Link
                  to="#"
                  className="flex justify-start gap-2 px-2 py-2 pl-4 font-normal leading-7 rounded-sm hover:bg-red-600 hover:text-black"
                >
                  <SVGUser />
                  <b>แก้ไขข้อมูลผู้ใช้งาน</b>
                </Link>
                <Link
                  to="#"
                  className="flex justify-start gap-2 px-1 py-2 pl-4 font-normal leading-7 text-red-600 align-middle rounded-sm hover:bg-red-600 hover:text-white"
                >
                  <SVGLogout />
                  <b>ออกจากระบบ</b>
                </Link>
              </Menu.Items>
            </Menu>

            {/* <div className="navbar-item dropdown has-divider has-user-avatar">
              <a className="navbar-link">
                <div className="user-avatar">
                  <img
                    src="https://avatars.dicebear.com/v2/initials/john-doe.svg"
                    alt="John Doe"
                    className="rounded-full"
                  />
                </div>
                <div className="is-user-name">
                  <span>John Doe</span>
                </div>
                <span className="icon">
                  <i className="mdi mdi-chevron-down"></i>
                </span>
              </a>
              <div className="navbar-dropdown">
                <a
                  href="profile.html"
                  className="navbar-item --set-active-profile-html"
                >
                  <span className="icon">
                    <i className="mdi mdi-account"></i>
                  </span>
                  <span>My Profile</span>
                </a>
                <a className="navbar-item">
                  <span className="icon">
                    <i className="mdi mdi-settings"></i>
                  </span>
                  <span>Settings</span>
                </a>
                <a className="navbar-item">
                  <span className="icon">
                    <i className="mdi mdi-email"></i>
                  </span>
                  <span>Messages</span>
                </a>
                <hr className="navbar-divider" />
                <a className="navbar-item">
                  <span className="icon">
                    <i className="mdi mdi-logout"></i>
                  </span>
                  <span>Log Out</span>
                </a>
              </div>
            </div> */}

            {/* <a title="Log out" className="navbar-item desktop-icon-only">
              <span className="icon">
                <SVGLogout />
              </span>
              <span>ออกจากระบบ</span>
            </a> */}
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
