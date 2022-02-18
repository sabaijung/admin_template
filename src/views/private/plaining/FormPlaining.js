import React from "react"
import SVGSave from "../../../assets/svg/SVGSave";
import SVGClockwise from "../../../assets/svg/SVGClockwise";
import { TextField } from "../../../components/TextField";
import { Formik, Form, ErrorMessage, Field, FieldArray } from "formik";
import DatePickerTH from "../../../components/DatePickerTH";
import { TextSelect } from "../../../components/TextSelect";

export default function FormPlaining() {

    const teamsMember = [
        { id: "1", name: "นาย ก" },
        { id: "2", name: "นาย ข" },
        { id: "3", name: "นาย ค" },
    ];


    return (
        <Formik
            initialValues={{ friends: ['jared', 'ian', 'brent'] }}
        // validationSchema={ValidateProject}
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
                                <h1 className="text-blue-500">เพิ่มข้อมูลแผนงานโครงการ</h1>
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

                        <div className="mt-2 flex flex-wrap justify-start">
                            <div className="mt-2 md:w-full">
                                <TextField
                                    name="plainingName"
                                    title="ชื่อแผนงานโครงการ"
                                    type="text"
                                    onChange={handleChange}
                                    value={values.plainingName}
                                />
                            </div>
                            <div className="mt-2 md:w-1/4 pr-1">
                                <label className="field-label">วันที่เริ่มต้น</label>
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
                                    inputClass={`field-input ${touched.startDate && errors.startDate && "is-invalid"
                                        }`}
                                />
                                {console.log("values.startDate", values.startDate)}
                                <ErrorMessage
                                    component="div"
                                    name="startDate"
                                    className="input-error"
                                />

                            </div>
                            <div className="mt-2 md:w-1/4 pr-1">
                                <label className="field-label">วันที่สิ้นสุด</label>
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
                                    inputClass={`field-input ${touched.endDate && errors.endDate && "is-invalid"
                                        }`}
                                />
                                {console.log("values.endDate", values.endDate)}
                                <ErrorMessage
                                    component="div"
                                    name="endDate"
                                    className="input-error"
                                />
                            </div>
                            <div className="mt-2 md:w-2/4">
                                <TextSelect
                                    title="ผู้รับผิดชอบ"
                                    options={teamsMember}
                                    onChange={(e) => {
                                        setFieldValue("teamsMember", e.id);
                                    }}
                                    getOptionLabel={(x) => x.name}
                                    getOptionValue={(x) => x.id}
                                    name="teamsMember"
                                    placeholder="ผู้รับผิดชอบ"
                                    onBlur={handleBlur}
                                    value={teamsMember.filter((e) => e.id === values.teamsMember)}
                                />
                            </div>
                            <div className="mt-2 md:w-full">
                                <span>แผนงานย่อย</span>
                            </div>
                            <div className="mt-2 md:w-full">
                                <div className="mt-2 md:flex md:flex-wrap md:justify-between">
                                    <div className="field-group md:w-1/6">
                                        <label className="text-center field-label">ลำดับ</label>
                                    </div>
                                    <div className="pr-2 field-group md:w-3/6">
                                        <label className="field-label">ชื่อแผนงานย่อย</label>
                                    </div>
                                    <div className="pr-2 field-group md:w-1/6">
                                        <label className="field-label">วันที่เริ่มต้น</label>
                                    </div>
                                    <div className="pr-2 field-group md:w-1/6">
                                        <label className="field-label">วันที่สิ้นสุด</label>
                                    </div>
                                </div>
                                <FieldArray
                                    name="friends"
                                >
                                    {({ insert, remove, push }) => (
                                        <div>
                                            <div className="flex items-center w-full py-2 ">
                                                <div className="field-group md:w-1/12 pr-2">
                                                    <label className="text-center field-label">1</label>
                                                </div>
                                                <div className="md:w-3/6 pr-2">
                                                    <TextField
                                                        name="subPlainingName"
                                                        title=""
                                                        type="text"
                                                        onChange={handleChange}
                                                        value={values.subPlainingName}
                                                    />
                                                </div>
                                                <div className="md:w-3/12 pr-2">
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
                                                        inputClass={`field-input ${touched.startDate && errors.startDate && "is-invalid"
                                                            }`}
                                                    />
                                                    {console.log("values.startDate", values.startDate)}
                                                    <ErrorMessage
                                                        component="div"
                                                        name="startDate"
                                                        className="input-error"
                                                    />
                                                </div>
                                                <div className="md:w-3/12">
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
                                                        inputClass={`field-input ${touched.startDate && errors.startDate && "is-invalid"
                                                            }`}
                                                    />
                                                    {console.log("values.startDate", values.startDate)}
                                                    <ErrorMessage
                                                        component="div"
                                                        name="startDate"
                                                        className="input-error"
                                                    />
                                                </div>

                                            </div>
                                        </div>
                                    )}
                                </FieldArray>
                            </div>
                        </div>
                    </div >
                </Form>
            )}
        </Formik>
    )
}