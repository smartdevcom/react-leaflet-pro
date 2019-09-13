import auth from '../components/Auth';
import { getUrl } from '../utils/string';

export const stripe_token = process.env.REACT_APP_STRIPE_API_PUBLIC_KEY;
export const apiURL = process.env.REACT_APP_API_URL;
export const isUIDev = process.env.REACT_APP_UI_DEV === 'true';
export const db_token = localStorage.getItem('db_token');

export const getAuthHeaders = () => {
   return {
      Authorization: 'Bearer ' + auth.getAccessToken()
   };
};

export const http = options => {
   if (isUIDev) {
      return Promise.resolve({ success: true });
   }
   const { url, params, method, headers, body, withAuth = true, text = false, ...rest } = options;
   let request = {
      method,
      headers: { ...headers, 'Content-Type': 'application/json' },
      ...rest
   };
   let urlPath = url;
   if (params) {
      if (method && method.toLowerCase() === 'get') {
         urlPath = getUrl(url, params);
      }
   }
   if (body) {
      request.body = JSON.stringify(body);
   }
   if (withAuth) {
      try {
         const authHeaders = getAuthHeaders();
         request.headers = { ...request.headers, ...authHeaders };
      } catch (error) {
         // auth.logout();
      }
   }

   return fetch(urlPath, request)
      .then(response => Promise.all([response, !text && response.json()]))
      .then(([response, json]) => {
         if (response.status === 401) {
            return auth.logout();
         }
         if (text) {
            return response.text();
         }
         return json;
      })
      .catch(exception => {
         console.log(
            new Map([
               [TypeError, 'There was a problem fetching the response.'],
               [SyntaxError, 'There was a problem parsing the response.'],
               [Error, exception.message]
            ]).get(exception.constructor)
         );
      });
};
