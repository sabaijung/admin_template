import React, { useEffect, useState } from "react"
import SVGSave from "../../../assets/svg/SVGSave";
import SVGClockwise from "../../../assets/svg/SVGClockwise";
import { TextField } from "../../../components/TextField";
import { Formik, Form, ErrorMessage, Field, FieldArray } from "formik";
import DatePickerTH from "../../../components/DatePickerTH";
import { TextSelect } from "../../../components/TextSelect";
import SVGAdd from "../../../assets/svg/SVGAdd";
import { useHistory } from 'react-router-dom';

export default function FormPlaining() {
    const history = useHistory();

    const teamsMember = [
        { id: "1", name: "นาย ก" },
        { id: "2", name: "นาย ข" },
        { id: "3", name: "นาย ค" },
    ];

    const [detailId, setDetailId] = useState(null);
    const [id, setId] = useState(null);

    return (
        <Formik
            initialValues={{
                subPlainingItem:
                    id !== null
                        ? detailId.subPlainingItem
                        : [
                            {
                                rawId: '',
                                subPlainingName: '',
                                spStartDate: '',
                                spEndDate: ''
                            },
                        ],
            }}
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

                            <div className="mt-2 md:w-full">
                                <span>แผนงานย่อย</span>
                            </div>
                            <div className="mt-2 md:w-full">
                                <div className="mt-2 md:flex md:flex-wrap md:justify-start">
                                    <div className="field-group pr-4">
                                        <label className="text-center field-label">ลำดับ</label>
                                    </div>
                                    <div className="field-group md:w-4/12">
                                        <label className="field-label">ชื่อแผนงานย่อย</label>
                                    </div>
                                    <div className="pr-2 field-group md:w-3/12">
                                        <label className="field-label">ผู้รับผิดชอบ</label>
                                    </div>
                                    <div className="pr-2 field-group md:w-2/12">
                                        <label className="field-label">วันที่เริ่มต้น</label>
                                    </div>
                                    <div className="pr-2 field-group md:w-2/12">
                                        <label className="field-label">วันที่สิ้นสุด</label>
                                    </div>
                                </div>
                                <FieldArray
                                    name="subPlainingItem"
                                >
                                    {({ insert, remove, push }) => (
                                        <div>
                                            {values.subPlainingItem.length !== null &&
                                                values.subPlainingItem.map((item, index) => (
                                                    <div key={index} className="md:flex md:flex-wrap md:justify-start">
                                                        <div className="field-group pr-4">
                                                            <label className="text-center field-label">{index + 1}</label>
                                                        </div>
                                                        <div className="md:w-4/12 pr-2">
                                                            <TextField
                                                                name="subPlainingName"
                                                                title=""
                                                                type="text"
                                                                onChange={handleChange}
                                                                value={values.subPlainingName}
                                                            />
                                                        </div>
                                                        <div className="md:w-3/12 pr-2">
                                                            <TextSelect
                                                                title=""
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
                                                        <div className="md:w-2/12 pr-2">
                                                            <DatePickerTH
                                                                name="spStartDate"
                                                                placeholder="วัน/เดือน/ปี"
                                                                format="DD/MM/YYYY"
                                                                editable={false}
                                                                readOnly={values.spStartDate === 1}
                                                                onChange={(e) => {
                                                                    setFieldValue("spStartDate", e);
                                                                }}
                                                                value={values.spStartDate}
                                                                inputClass={`field-input ${touched.spStartDate && errors.spStartDate && "is-invalid"
                                                                    }`}
                                                            />
                                                            <ErrorMessage
                                                                component="div"
                                                                name="spStartDate"
                                                                className="input-error"
                                                            />
                                                        </div>
                                                        <div className="md:w-2/12">
                                                            <DatePickerTH
                                                                name="spEndDate"
                                                                placeholder="วัน/เดือน/ปี"
                                                                format="DD/MM/YYYY"
                                                                editable={false}
                                                                readOnly={values.spEndDate === 1}
                                                                onChange={(e) => {
                                                                    setFieldValue("spEndDate", e);
                                                                }}
                                                                value={values.spEndDate}
                                                                inputClass={`field-input ${touched.spEndDate && errors.spEndDate && "is-invalid"
                                                                    }`}
                                                            />
                                                            <ErrorMessage
                                                                component="div"
                                                                name="spEndDate"
                                                                className="input-error"
                                                            />
                                                        </div>
                                                        <div>
                                                            <button className="ml-1 btn btn-red btn-sm"
                                                                onClick={() => remove(index)}>
                                                                <i className="fas fa-trash-alt"></i>
                                                            </button>
                                                        </div>
                                                    </div>

                                                ))}

                                            {/* ปุ่ม add */}
                                            <div className="flex justify-end my-2">
                                                <button
                                                    className="mr-1 btn btn-green btn-sm"
                                                    onClick={() => {
                                                        push({
                                                            rawId: '',
                                                            subPlainingName: '',
                                                            spStartDate: '',
                                                            spEndDate: ''
                                                        })
                                                    }}
                                                >
                                                    <SVGAdd color="white" />
                                                </button>
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