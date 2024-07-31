import axios from "axios";

export interface Response<T> {
  count: number;
  results: T[];
}
const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "a95e752c0c574a3a93c3b333b2e0daad",
  },
});

export default apiClient;
