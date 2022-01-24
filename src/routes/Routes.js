import PrivateLayout from "../layout/PrivateLayout";

//private
import MainUser from "../views/private/users/MainUser";
const Routes = [
  {
    path: "/",
    name: "ข้อมูลผู้ใช้งาน",
    component: MainUser,
    role: 0,
    layout: PrivateLayout,
  },
];
export default Routes;
