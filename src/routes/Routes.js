import PrivateLayout from "../layout/private/PrivateLayout"
import PublicLayout from "../layout/public/PublicLayout";

//public
import Authen from "../views/public/authentication/Authen";
import Login from "../views/public/login/login"

//private
import MainUser from "../views/private/users/MainUser";
import FormUser from "../views/private/users/FormUser";
import MainProject from "../views/private/project/MainProject";
import FormProject from "../views/private/project/FormProject";
import MainPlaining from "../views/private/plaining/MainPlaining";
import FormPlaining from "../views/private/plaining/FormPlaining";

const Routes = [
  {
    path: '/',
    name: 'เข้าสู่ระบบ',
    component: Login,
    role: 0,
    layout: PublicLayout,
  },
  {
    path: "/Authentication",
    name: "เข้าใช้งานระบบ",
    component: Authen,
    role: 0,
    layout: PublicLayout,
  },
  {
    path: "/MainUser",
    name: "ข้อมูลผู้ใช้งาน",
    component: MainUser,
    role: 0,
    layout: PrivateLayout,
  },
  {
    path: "/MainUser",
    name: "ข้อมูลผู้ใช้งาน",
    component: MainUser,
    role: 0,
    layout: PrivateLayout,
  },
  {
    path: "/MainUser/FormUser",
    name: "เพิ่มข้อมูลผู้ใช้งาน",
    component: FormUser,
    role: 0,
    layout: PrivateLayout,
  },
  {
    path: "/MainProject",
    name: "ข้อมูลโครงการ",
    component: MainProject,
    role: 0,
    layout: PrivateLayout,
  },
  {
    path: "/Project/FormProject",
    name: "เพิ่มข้อมูลโครงการ",
    component: FormProject,
    role: 0,
    layout: PrivateLayout,
  },
  {
    path: "/MainPlaining",
    name: "แผนงานโครงการ",
    component: MainPlaining,
    role: 0,
    layout: PrivateLayout,
  },
  {
    path: "/MainPlaining/FormPlaining",
    name: "เพิ่มข้อมูลแผนงานโครงการ",
    component: FormPlaining,
    role: 0,
    layout: PrivateLayout,
  },
];

export default Routes;
