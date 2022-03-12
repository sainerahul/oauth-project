import axios from "axios";
import config from "../../shared/config";
const accessUrl = config['ACCESS_URL'];
export default {
    getAccessToken: (data)=>{
        return new Promise((resolve,reject)=>{
            axios.post(accessUrl,data,{
                headers:{
                    'Accept':'application/json'
                }
            })
            .then((result)=>{
                if(result.data && result.data.error) reject(result.data.error)
                resolve(result.data.access_token);
            })
            .catch((error)=>{
                reject(error);
            });
        });
    }
}