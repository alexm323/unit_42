import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class SnackOrBoozeApi {
  // my original idea was to get these two methods consolidated using window.location.pathname but it was a little more troublesome than I had anticipated for the sake of getting it working these two methods grab both snacks and booze from the json db
  static async getSnacks() {
    const result = await axios.get(`${BASE_API_URL}/snacks`);
    
    return result.data;
  }
  static async getDrinks() {
    const result = await axios.get(`${BASE_API_URL}/drinks`);
    return result.data;
  }

  // this allows us to create a new item based on our endpoint and the data we put into our MenuItemForm component
  static async createItem(endpoint,payload){
    const result = await axios.post(`${BASE_API_URL}/${endpoint}`,payload)
    return result.data
  }

}

export default SnackOrBoozeApi;