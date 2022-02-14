import React from "react";
import SVGSave from "../../../assets/svg/SVGSave";
import SVGClockwise from "../../../assets/svg/SVGClockwise";
import { TextField } from "../../../components/TextField";
import { TextSelect } from "../../../components/TextSelect";
import { Formik, Form } from "formik";

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
              <div className="pr-2 mt-2 md:w-full">
                <TextField
                  name="projectName"
                  title="ชื่อโครงการ"
                  type="text"
                  onChange={handleChange}
                  value={values.firstName}
                />
              </div>
              <div className="pr-2 mt-2 md:w-1/3">
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
              <div className="pr-2 mt-2 md:w-1/3">
                {" "}
                <TextField
                  name="startDate"
                  title="วันที่เริ่มโครงการ"
                  type="text"
                  onChange={handleChange}
                  value={values.firstName}
                />
              </div>
              <div className="pr-2 mt-2 md:w-1/3">
                <TextField
                  name="endDate"
                  title="วันที่สิ้นสุดโครงการ"
                  type="text"
                  onChange={handleChange}
                  value={values.firstName}
                />
              </div>
              <div className="pr-2 mt-2 md:w-full">
                <TextField
                  name="detail"
                  title="รายละเอียด"
                  type="text"
                  onChange={handleChange}
                  value={values.firstName}
                />
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
