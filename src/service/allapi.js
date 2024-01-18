import { BASE_URL } from "./baseurl";
import { commonApi } from "./commonapi";


// add employe

export const addUser=async(body,header)=>{

  return await  commonApi("POST",`${BASE_URL}/add`,body,header)

}


// get employee

export const getUsers=async(search)=>{

  return await  commonApi("GET",`${BASE_URL}/get/allusers?search=${search}`,"")

}

// edit employee

export const editUser=async(id,body,header)=>{

  return await  commonApi("PUT",`${BASE_URL}/edit/user/${id}`,body,header)

}



// delete employee

export const deleteUser=async(id)=>{

  return await  commonApi("DELETE",`${BASE_URL}/delete/user/${id}`,{})
}