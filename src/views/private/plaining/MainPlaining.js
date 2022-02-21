import React from "react";
import SVGAdd from "../../../assets/svg/SVGAdd";
import SVGClockwise from "../../../assets/svg/SVGClockwise";
import SVGSearch from "../../../assets/svg/SVGSearch";
import ShowPlaining from "./ShowPlaining";
import { useHistory } from "react-router";

export default function MainPlaining() {
    const history = useHistory();

    return (
        <div>
            <div className="flex flex-wrap mx-auto">
                <div className="w-full pr-2 mb-2 md:w-1/2">
                    <h4 className="text-blue-500">
                        <strong>ข้อมูลแผนงานโครงการ</strong>
                    </h4>
                </div>
                <div className="w-full pr-2 mb-2 text-right md:w-1/2">
                    <button
                        className="mr-1 btn btn-green btn-sm"
                        onClick={() => {
                            history.push("/MainPlaining/FormPlaining");
                        }}
                    >
                        {" "}
                        <SVGAdd color="white" /> &nbsp;เพิ่มใหม่
                    </button>
                </div>
            </div>
            <div className="mt-2 bg-white border-b border-l border-r border-gray-400"></div>

            <div className="mt-10">
                <div className="flex ">
                    <div className="w-full">
                        <div className="flex flex-wrap mx-auto justify-left">
                            <div className="w-full pr-2 mb-2 md:w-1/4">
                                <input
                                    className="field-input"
                                    placeholder="ค้นหา"
                                />
                            </div>
                            <div className="w-full pr-2 mb-2 md:w-1/4">
                                <button className="mr-1 btn btn-green btn-md">
                                    {" "}
                                    <SVGSearch color="white" />
                                    ค้นหา
                                </button>
                                <button className="btn btn-gray btn-md">
                                    {" "}
                                    <SVGClockwise color="white" />
                                    ล้างค่า
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-1">
                <ShowPlaining />
            </div>
        </div>
    );
}
