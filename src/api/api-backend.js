import api from './api-base';

export const restaurantApi = {
  
  getinfo: (id) => api.get(`/api/v1/restaurant/${id}/orders`),


}