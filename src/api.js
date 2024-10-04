import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://apiserviceinrise.azurewebsites.net',  
  headers: {
    'Content-Type': 'application/json',
    'secret': 'naf9uafjh_+mcdsaIFD023', 
  },
});


export function fetchLandingPage() {
  return apiClient.get('/LandingPage');
}

export function submitLandingPage(data) {
  return apiClient.post('/LandingPage', data);
}

export { apiClient };
