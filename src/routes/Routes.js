import PrivateLayout from "../layout/PrivateLayout";

//private
import MainUser from "../views/private/users/MainUser";
import FormUser from "../views/private/users/FormUser";
import MainProject from "../views/private/project/MainProject";
import FormProject from "../views/private/project/FormProject";

const Routes = [
  {
    path: "/",
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
];

export default Routes;
