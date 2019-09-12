import { apiURL, http } from "./config";
import { getComments, getUrl } from "../utils/string";

export const suggestAddress = params => {
  return http({
    url: `${apiURL}/address`,
    method: "get",
    params
  });
};
export const getAddress = params => {
  return http({
    url: `${apiURL}/address/${params.id}`,
    method: "get"
  });
};

export const findProperties = params => {
  return http({
    url: `${apiURL}/properties`,
    method: "get",
    params
  });
};

export const getProperty = ({ propertyId, ...params }) => {
  return http({
    url: `${apiURL}/properties/${propertyId}?t=${Date.now()}`,
    method: "get",
    cache: "no-store",
    params
  }).then(result => {
    return {
      ...result,
      data: {
        ...result.data,
        ...getComments(result.data.stashComments)
      }
    };
  });
};
export const getPortalUrl = ({ ...params }) => {
  return http({
    url: `${apiURL}/portalUrl`,
    method: "get",
    params
  });
};

export const getMailMerge = params => {
  return window.open(
    getUrl(
      `https://www.crm2print.com/api/merge/256813/token/wWJHcT/docx`,
      params
    )
  );
};
export const findComparables = ({ propertyId, ...params }) => {
  return http({
    url: `${apiURL}/properties/${propertyId}/comparables`,
    method: "get",
    params
  }).then(({ data }) => {
    return data
      .filter(item => item.lastSaleDetail.price > 0)
      .map(item => {
        item.lastSaleDetail.timestamp = new Date(
          item.lastSaleDetail.contractDate
        ).getTime();
        item.attributes.cars =
          Number(item.attributes.lockUpGarages || 0) +
          Number(item.attributes.carSpaces || 0);
        return item;
      });
  });
};
export const findMyProperties = () => {
  return http({
    url: `${apiURL}/myProperties`,
    method: "get"
  }).then(result => {
    return {
      ...result,
      data:
        result && result.data
          ? result.data.map(item => {
              return {
                ...item,
                stashId: item.id,
                stashStatus: item.status,
                ...getComments(item.comments),
                address: item.title,
                visible: true
              };
            })
          : []
    };
  });
};

export const createMyProperty = ({ body }) => {
  return http({
    url: `${apiURL}/myProperties`,
    method: "post",
    body
  }).then(result => {
    return {
      ...result,
      data: {
        ...result.data,
        stashId: result.data.id,
        stashStatus: result.data.status,
        ...getComments(result.data.comments)
      }
    };
  });
};
export const updateMyProperty = ({ id, body }) => {
  return http({
    url: `${apiURL}/myProperties/${id}`,
    method: "put",
    body
  }).then(result => {
    return {
      ...result,
      data: {
        ...result.data,
        stashStatus: result.data.status,
        ...getComments(result.data.comments)
      }
    };
  });
};
export const updateMyProperties = ({ body }) => {
  return http({
    url: `${apiURL}/myProperties`,
    method: "put",
    body
  });
};
export const deleteMyProperty = id => {
  return http({
    url: `${apiURL}/myProperties/${id}`,
    method: "delete"
  });
};
export const deleteMyProperties = ids => {
  return http({
    url: `${apiURL}/myProperties`,
    method: "delete",
    body: ids
  });
};
export const addAllProperties = ids => {
  return http({
    url: `${apiURL}/myProperties`,
    method: "post",
    body: { ids }
  });
};
export const exportAllProperties = ids => {
  return http({
    url: `${apiURL}/export`,
    method: "post",
    body: { ids },
    text: true
  });
};
