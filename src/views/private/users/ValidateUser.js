import { string, object, ref } from "yup";
export const ValidateUser = object({
  prefix: string().required("กรุณาเลือกคำนำหน้าชื่อ"),
  firstName: string().required("กรุณากรอกชื่อ"),
  lastName: string().required("กรุณากรอกนามสกุล"),
});
