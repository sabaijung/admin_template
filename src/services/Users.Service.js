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

// call api สำหรับบันทึกข้อมูล
export async function SaveUser(v) {
    try {
        let formData = new FormData();
        formData.append("InitialCode", v.prefix);
        formData.append("Name", v.name);
        formData.append("Lastname", v.lastname);
        formData.append("DepartmentCode", v.departmentCode);
        formData.append("PositionCode", v.positionCode);
        formData.append("Mobilephone", v.mobilePhone);
        formData.append("Address", v.address);
        formData.append("DistrictCode", v.subDistrict);
        formData.append("AmphurCode", v.district);
        formData.append("ProvinceCode", v.province);
        formData.append("Postcode", v.zipCode);
        formData.append("Username", v.username);
        formData.append("Password", v.password);
        formData.append("Role", v.role);
        formData.append("Isused", v.isUsed);
        formData.append("ImageProfile", v.imageProfile);

        const response = await Instance.post("Users/CreateUser", formData);
        return await response.data;
    } catch (error) {
        console.log("error", error);
    }
}

export async function UserDetail(code) {
    try {
        const response = await Instance.get("Users/GetUserDetail?code=" + code);
        return await response.data;
    } catch (error) {
        console.log("error", error);
    }
}

export async function UpdateUser(v, id) {
    try {
        let formData = new FormData();
        formData.append("InitialCode", v.prefix);
        formData.append("Name", v.name);
        formData.append("Lastname", v.lastname);
        formData.append("DepartmentCode", v.departmentCode);
        formData.append("PositionCode", v.positionCode);
        formData.append("Mobilephone", v.mobilePhone);
        formData.append("Address", v.address);
        formData.append("DistrictCode", v.subDistrict);
        formData.append("AmphurCode", v.district);
        formData.append("ProvinceCode", v.province);
        formData.append("Postcode", v.zipCode);
        formData.append("Username", v.username);
        formData.append("Password", v.password);
        formData.append("Role", v.role);
        formData.append("Isused", v.isUsed);
        formData.append("ImageProfile", v.imageProfile);

        const response = await Instance.put("Users/UpdateUser/" + id, formData);
        return await response.data;
    } catch (error) {
        console.log("error", error);
    }
}
