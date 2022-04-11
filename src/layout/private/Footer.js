import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0">
          <div className="flex items-center justify-start space-x-3">
            <div>© 2022, CODE ME STYLE</div>
            <a href="https://github.com/justboil/admin-one-tailwind">
              <img src="https://img.shields.io/github/v/release/justboil/admin-one-tailwind?color=%23999" />
            </a>
          </div>
          <a href="#"></a>
        </div>
      </footer>
    </div>
  );
}
