import axios from "axios";

// const AxiosSecure = axios.create({
//   baseURL: "http://localhost:5000",
// });
const AxiosSecure = axios.create({
  baseURL: "https://server-seven-zeta-94.vercel.app",
});

const useAxiosSecure = () => {
  return AxiosSecure;
};

export default useAxiosSecure;
