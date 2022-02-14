import React from "react";
import SVGSave from "../../../assets/svg/SVGSave";
import SVGClockwise from "../../../assets/svg/SVGClockwise";
import { TextField } from "../../../components/TextField";
import { TextSelect } from "../../../components/TextSelect";
import DatePickerTH from "../../../components/DatePickerTH";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Formik, Form, ErrorMessage } from "formik";

export default function FormProject() {
  const customer = [
    { id: "1", name: "test1" },
    { id: "2", name: "test2" },
    { id: "3", name: "test3" },
  ];

  return (
    <Formik
      initialValues={{
        projectName: "",
      }}
    >
      {({
        errors,
        touched,
        values,
        handleChange,
        handleBlur,
        setFieldValue,
      }) => (
        <Form>
          <div>
            <div className="flex flex-wrap mx-auto">
              <div className="w-full pr-2 md:w-1/2">
                <h1 className="text-blue-500">เพิ่มข้อมูลโครงการ</h1>
              </div>
              <div className="flex justify-end mx-auto mt-2 md:w-1/2">
                <button className="mr-1 btn btn-green btn-sm">
                  <SVGSave color="white" /> &nbsp;บันทึก
                </button>
                <button className="mr-1 btn btn-gray btn-sm">
                  <SVGClockwise color="white" /> &nbsp;ล้างค่า
                </button>
              </div>
            </div>
            <div className="mt-2 bg-white border-b border-l border-r border-gray-400" />

            <div className="mt-2 flex flex-wrap justify-between">
              <div className="mt-2 md:w-full">
                <TextField
                  name="projectName"
                  title="ชื่อโครงการ"
                  type="text"
                  onChange={handleChange}
                  value={values.firstName}
                />
              </div>
              <div className="pr-2 mt-2 md:w-2/4">
                <TextSelect
                  title="ชื่อลูกค้า"
                  options={customer}
                  onChange={(e) => {
                    setFieldValue("prefix", e.id);
                  }}
                  getOptionLabel={(x) => x.name}
                  getOptionValue={(x) => x.id}
                  name="customerName"
                  placeholder="เลือกลูกค้า"
                  onBlur={handleBlur}
                  value={customer.filter((e) => e.id === values.prefix)}
                />
              </div>
              <div className="pr-2 mt-2 md:w-1/4">
                <label className="field-label">วันที่เริ่มโครงการ</label>
                <DatePickerTH
                  name="startDate"
                  placeholder="วัน/เดือน/ปี"
                  format="DD/MM/YYYY"
                  editable={false}
                  readOnly={values.startDate === 1}
                  onChange={(e) => {
                    setFieldValue("startDate", e);
                  }}
                  value={values.startDate}
                  inputClass={`field-input ${
                    touched.startDate && errors.startDate && "is-invalid"
                  }`}
                />
                {console.log("values.startDate", values.startDate)}
                <ErrorMessage
                  component="div"
                  name="startDate"
                  className="input-error"
                />
              </div>
              <div className="pr-2 mt-2 md:w-1/4">
                <label className="field-label">วันที่สิ้นสุดโครงการ</label>
                <DatePickerTH
                  name="endDate"
                  placeholder="วัน/เดือน/ปี"
                  format="DD/MM/YYYY"
                  editable={false}
                  readOnly={values.endDate === 1}
                  onChange={(e) => {
                    setFieldValue("endDate", e);
                  }}
                  value={values.endDate}
                  inputClass={`field-input ${
                    touched.endDate && errors.endDate && "is-invalid"
                  }`}
                />
                {console.log("values.endDate", values.endDate)}
                <ErrorMessage
                  component="div"
                  name="endDate"
                  className="input-error"
                />
              </div>
              <div className="pr-2 mt-2 md:w-full">
                <CKEditor
                  helperText={touched.aboutYou && errors.aboutYou}
                  name="aboutYou"
                  editor={ClassicEditor}
                  data={values.aboutYou}
                  onChange={(event, editor) => {
                    setFieldValue("aboutYou", editor.getData());
                  }}
                  config={{
                    toolbar: [
                      "heading",
                      "|",
                      "bold",
                      "italic",
                      "|",
                      "undo",
                      "redo",
                    ],
                    minHeight: "500px",
                  }}
                />
                {/* <TextField
                  name="detail"
                  title="รายละเอียด"
                  type="text"
                  onChange={handleChange}
                  value={values.firstName}
                /> */}
              </div>
              <div className="pr-2 mt-2 md:w-full">
                <label className="field-label">สถานะโครงการ</label>
                <div className="mt-1">
                  <label className="items-center mr-5 cursor-pointer md:inline-flex">
                    <input
                      type="radio"
                      id="open"
                      className=""
                      name="projectStatus"
                      value=""
                    />
                    <label htmlFor="open" className="cursor-pointer">
                      &nbsp; ดำเนินโครงการ
                    </label>
                  </label>
                  <label className="items-center cursor-pointer md:inline-flex ">
                    <input
                      id="close"
                      type="radio"
                      className=""
                      name="projectStatus"
                      value=""
                    />
                    <label htmlFor="close" className="cursor-pointer">
                      &nbsp; ปิดโครงการ
                    </label>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
