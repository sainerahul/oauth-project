import config from "../shared/config";
import UserAuthService from "../services/user/UserAuthService"
const loginUrl = config['LOGIN_URL'];
const client_id = config['CLIENT_ID'];
const client_secret = config['CLIENT_SECRET'];
export default{
    login: () =>{
        window.location.replace(`${loginUrl}?client_id=${client_id}`);
    },
    logout:()=>{
        sessionStorage.clear();
    },
    isLoggedIn:()=>{
        return sessionStorage.getItem('token') ? true : false;  
    },
    getTokenFromSession:()=>{
        return sessionStorage.getItem('token') ? sessionStorage.getItem('token') : null;
    },
    getAccessToken: async(code)=>{
        try{
        let data ={
            client_id,
            client_secret,
            code
        }
        let response = await UserAuthService.getAccessToken(data);
        sessionStorage.setItem("token",response)
        return response;
        }
        catch(err){
            throw TypeError(new Error(err));
        }
    }
}
