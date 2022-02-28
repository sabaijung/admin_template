import * as Yup from "yup";

export const ValidateAuthen = Yup.object({
    username: Yup.string()
        .required("กรุณากรอกชื่อผู้ใช้งาน")
        .matches(/^[\w-\.]+@([\w-]{2,}.)+[\w-]{2,4}$/, "รูปแบบอีเมลไม่ถูกต้อง"),
    password: Yup.string().required("กรุณากรอกรหัสผ่าน"),
});
