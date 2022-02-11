import { string, object, ref } from "yup";

const emailValidation = /^[a-zA-Z0-9_\\.]+@[a-zA-Z]+\.[a-zA-Z0-9\\.]+$/;

export const ValidateUser = object({
  prefix: string().required("กรุณาเลือกคำนำหน้าชื่อ"),
  firstName: string().required("กรุณากรอกชื่อ"),
  lastName: string().required("กรุณากรอกนามสกุล"),
  mobilePhone: string()
    .matches(/^[0-9]+$/, "กรุณาตรวจสอบเบอร์มือถืออีกครั้ง")
    .required("กรุณากรอกเบอร์โทร"),
  address: string().required("กรุณากรอกที่อยู่"),
  subDistrict: string().required("กรุณาเลือกตำบล"),
  district: string().required("กรุณาเลือกอำเภอ"),
  province: string().required("กรุณาเลือกจังหวัด"),
  zipCode: string().required("กรุณากรอกรหัสไปรษณีย์"),
  username: string()
    .required("กรุณากรอกอีเมล")
    .matches(emailValidation, "รูปแบบผู้ใช้งานไม่ถูกต้อง"),
});
