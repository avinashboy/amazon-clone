import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'https://api-stripe-paymant-gatways.herokuapp.com'
});

export default instance;