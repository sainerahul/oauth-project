import axios from "axios";
import config from "../../shared/config";
import auth from "../../authenitcation/index";
const userInfoUrl = config["USER_INFO"];
export default {
  getUserInfo: () => {
    let token = auth.getTokenFromSession();
    return new Promise((resolve, reject) => {
      axios
        .get(userInfoUrl, {
          headers: {
            Authorization: `token ${token}`,
          },
        })
        .then((result) => {
          if (result.data) resolve(result.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};
