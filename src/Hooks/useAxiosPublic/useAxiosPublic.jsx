import axios from "axios";

// const AxiosPublic = axios.create({
//   baseURL: "http://localhost:5000",
// });
const AxiosPublic = axios.create({
  baseURL: "https://server-seven-zeta-94.vercel.app",
});

const useAxiosPublic = () => {
  return AxiosPublic;
};

export default useAxiosPublic;
