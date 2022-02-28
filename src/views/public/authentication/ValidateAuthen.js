import * as Yup from "yup";

export const ValidateAuthen = Yup.object({
    username: Yup.string()
        .required("กรุณากรอกชื่อผู้ใช้งาน")
        .matches(/^[\w-\.]+@([\w-]{2,}.)+[\w-]{2,4}$/, "รูปแบบอีเมลไม่ถูกต้อง"),
    password: Yup.string().required("กรุณากรอกรหัสผ่าน"),
});


// import { string, object } from "yup";

// const emailValidation = /^[a-zA-Z0-9_\\.]+@[a-zA-Z]+\.[a-zA-Z0-9\\.]+$/;
// const passwordValidation =
//     /^(?=.*[A-Z-a-z])(?=.*\d)(?=.*[@$!%*#?&._])[A-Za-z\d@$!%*#?&._]{6,}$/;

// export const ValidateAuthen = object({

//     username: string()
//         .required("กรุณากรอกอีเมล")
//         .matches(emailValidation, "รูปแบบผู้ใช้งานไม่ถูกต้อง"),
//     password: string()
//         .required("กรุณากรอกรหัสผ่าน")
//         .matches(
//             passwordValidation,
//             "รหัสผ่านต้องประกอบไปด้วย ตัวอักษรภาษาอังกฤษตัวพิมพ์ใหญ่(A-Z) ตัวอักษรภาษาอังกฤษตัวพิมพ์เล็ก(a-z) ตัวเลขอารบิก (0-9) และอักขระพิเศษ รวมกันอย่างน้อย 6 ตัว"
//         )
// });



