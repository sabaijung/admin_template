import Instance from "../helper/Axios";

//call api สำหรับดึงข้อมูลผู้ใช้งานมาแสดงผล
export async function GetUsers(currentPage, pageSize, search) {
    try {
        const response = await Instance.get("Users/GetUsers?currentPage=" + currentPage + "&pageSize=" + pageSize + "&search=" + search);
        return await response.data;
    } catch (error) {
        console.log("error", error);
    }
}

