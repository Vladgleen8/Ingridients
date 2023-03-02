import axios from "axios";

export default axios.create({
  baseURL: 'https://api.spoonacular.com',
  headers: {
    'access-control-allow-origin': '*',
    'x-api-key' : 'e530901465e041889896dbb3a22e5046',
    'Content-Type' : 'application/json'
  }
});