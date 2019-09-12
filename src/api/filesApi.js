import { apiURL, http } from "./config";

export const getPresignedURL = (files, logout) => {
  const fileName = files[0].name;
  return http({
    url: `${apiURL}/upload/${fileName}`,
    method: "post",
    logout: logout
  });
};

export const uploadFiles = (files, url, logout) => {
  return http({
    url: url,
    method: "put",
    body: files[0],
    withAuth: false,
    logout: logout
  });
};

export const downloadFiles = (path, logout) => {
  return http({
    url: `${apiURL}/download?filePath=${path}`,
    method: "get",
    logout: logout
  });
};
