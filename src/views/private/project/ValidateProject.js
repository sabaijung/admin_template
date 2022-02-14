import { string, object, ref } from "yup";
export const ValidateProject = object({
  projectName: string().required("กรุณากรอกชื่อโครงการ"),
  customerName: string().required("กรุณาเลือกลูกค้า"),
  startDate: string().required("กรุณาเลือกวันที่เริ่มต้นโครงการ"),
  endDate: string().required("กรุณาเลือกวันที่สิ้นสุดโครงการ"),
  detail: string().required("กรุณากรอกรายละเอียด"),
  projectStatus: string().required("กรุณาเลือกสถานะโครงการ"),
});
