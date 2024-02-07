import axios from "axios";

const URL='https://6f4b-2405-201-201c-8115-a1e9-3510-3e1b-7680.ngrok-free.app'

export const authenticatesignup= async(data)=>{
    console.log("dataaa",data);
    try {
        return await axios.post(`${URL}/signup`,data)
    } catch (error) {
        console.log("error in signup",error);
    }
}

export const authenticatelogin= async(data)=>{
    console.log("logindataaa",data);
    try {
        return await axios.post(`${URL}/login`,data)
    } catch (error) {
        console.log("error in login",error);
        return error.response;
    }
}

export const getData=async(token)=>{
    console.log("tokennn",token);
    try {
        return await axios.post(`${URL}/userdata`,{token:token})
    } catch (error) {
        console.log("error in getting data through token",error);
        return error.response;
    }
}