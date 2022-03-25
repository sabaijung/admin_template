import Instance from "../helper/Axios";

export async function GetDepartment() {
    try {
        const response = await Instance.get("Department/GetAllDeparment");
        return await response.data;
    } catch (error) {
        console.log("error", error);
    }

}