import { CredentialsDTO } from "../model/auth";
import { CLIENT_ID, CLIENT_SECRET } from "../utils/system";

export function loginRequest(loginData: CredentialsDTO){
    const header ={
        "Content-Type":"application/x-www-form-urlencoded",
        Authorization: "Basic"+ window.btoa(CLIENT_ID + ":" + CLIENT_SECRET)
    }
    
}