import axios from "axios";
import config from "../../shared/config";
import auth from "../../authenitcation/index";
const userRepoUrl = config["USER_REPO"];
const starredRepoUrl = config["STARRED_REPO"];
export default {
  getRepoInfo: (visibility, sort) => {
    let token = auth.getTokenFromSession();
    return new Promise((resolve, reject) => {
      axios
        .get(`${userRepoUrl}${visibility}`, {
          headers: {
            Authorization: `token ${token}`,
          },
          params: {
            sort,
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
  getStarredRepoInfo: () => {
    let token = auth.getTokenFromSession();
    return new Promise((resolve, reject) => {
      axios
        .get(starredRepoUrl, {
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
