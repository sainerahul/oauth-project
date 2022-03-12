import axios from "axios";
import config from "../../shared/config";
import auth from "../../authenitcation/index"
const userRepoUrl = config['USER_REPO'];
export default {
    getRepoInfo: ()=>{
        let token = auth.getTokenFromSession();
        return new Promise((resolve,reject)=>{
            axios.get(userRepoUrl,{
                headers:{
                    'Authorization':`token ${token}`
                }
            })
            .then((result)=>{
                if(result.data) resolve(result.data);
            })
            .catch((error)=>{
                reject(error);
            });
        });
    }
}