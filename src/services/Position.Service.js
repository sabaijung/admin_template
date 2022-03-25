import Instance from "../helper/Axios";

export async function GetPosition(departmentCode) {
    try {
        const response = await Instance.get("Position/GetPosition?deptCode=" + departmentCode);
        return await response.data;
    } catch (error) {
        console.log("error", error);
    }

}