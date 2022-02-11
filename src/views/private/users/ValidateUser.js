import { string, object, ref } from "yup";

const emailValidation = /^[a-zA-Z0-9_\\.]+@[a-zA-Z]+\.[a-zA-Z0-9\\.]+$/;
const passwordValidation =
  /^(?=.*[A-Z-a-z])(?=.*\d)(?=.*[@$!%*#?&._])[A-Za-z\d@$!%*#?&._]{6,}$/;

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
  password: string()
    .required("กรุณากรอกรหัสผ่าน")
    .matches(
      passwordValidation,
      "รหัสผ่านต้องประกอบไปด้วย ตัวอักษรภาษาอังกฤษตัวพิมพ์ใหญ่(A-Z) ตัวอักษรภาษาอังกฤษตัวพิมพ์เล็ก(a-z) ตัวเลขอารบิก (0-9) และอักขระพิเศษ รวมกันอย่างน้อย 6 ตัว"
    ),
  confirmPassword: string()
    .oneOf([ref("password"), null], "รหัสผ่านไม่ตรงกัน")
    .required("กรุณากรอกยืนยันรหัสผ่าน")
    .matches(
      passwordValidation,
      "รหัสผ่านต้องประกอบไปด้วย ตัวอักษรภาษาอังกฤษตัวพิมพ์ใหญ่(A-Z) ตัวอักษรภาษาอังกฤษตัวพิมพ์เล็ก(a-z) ตัวเลขอารบิก (0-9) และอักขระพิเศษ รวมกันอย่างน้อย 6 ตัว"
    ),
});
