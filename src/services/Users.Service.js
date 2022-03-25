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

//call api สำหรับลบข้อมูลผู้ใช้งาน
export async function DeleteUser(code) {
    try {
        const response = await Instance.delete("Users/DeleteUser/" + code);
        return await response.data;
    } catch (error) {
        console.log("error", error);
    }
}