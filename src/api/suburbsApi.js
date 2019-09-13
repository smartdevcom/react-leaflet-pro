import { apiURL, http } from './config';

export const getSuburb = ({ localityName, postcode }) => {
   return http({
      url: `${apiURL}/suburbs/${localityName}/${postcode}`,
      method: 'get',
      cache: 'force-cache',
      headers: {
         'Content-Type': 'application/json'
      }
   }).catch(function(error) {
      console.log('Could not get suburbs', error);
   });
};

export const getSuburbs = ({ q }) => {
   return http({
      url: `${apiURL}/suburbs`,
      params: { q },
      method: 'get',
      cache: 'force-cache',
      headers: {
         'Content-Type': 'application/json'
      }
   }).catch(function(error) {
      console.log('Could not get suburbs', error);
   });
};
export const getZones = params => {
   return http({
      url: `${apiURL}/zones`,
      method: 'get',
      cache: 'force-cache',
      headers: {
         'Content-Type': 'application/json'
      },
      params
   }).catch(function(error) {
      console.log('Could not get zones', error);
   });
};
