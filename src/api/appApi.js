import { apiURL, http } from "./config";

export const getAppConfig = username => {
  return http({
    url: `${apiURL}/config`,
    method: "get",
    headers: {
      "Content-Type": "application/json"
    }
  });
};
