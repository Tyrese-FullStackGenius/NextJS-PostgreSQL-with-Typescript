import axios from "axios";

const baseUrl = "/api";

export const submitNumbers = (num1: Number, num2: Number) => {
  return axios.post(`${baseUrl}/submit-numbers`, { num1, num2 });
};

export const saveResult = (steps: Object) => {
  return axios.post(`${baseUrl}/save-steps`, { steps });
};
