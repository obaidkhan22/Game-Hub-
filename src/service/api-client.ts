import axios, { CanceledError } from "axios";
export interface FetchResponse<T> {
  count: number;
  results: T[];
}
const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4fe7ab98a539462ca2366c28092da003",
  },
});
export { CanceledError };
export default apiClient;
