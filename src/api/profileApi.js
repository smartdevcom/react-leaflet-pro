import { apiURL, http } from "./config";

export const updateProfile = body => {
  return http({
    url: `${apiURL}/profiles`,
    method: "post",
    body,
    headers: {
      "Content-Type": "application/json"
    }
  });
};

export const makePayment = body => {
  return http({
    url: `${apiURL}/payments`,
    method: "post",
    body,
    headers: {
      "Content-Type": "application/json"
    }
  });
};
