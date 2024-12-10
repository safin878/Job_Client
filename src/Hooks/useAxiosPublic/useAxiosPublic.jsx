import axios from "axios";

const AxiosPublic = axios.create({
  baseURL: "https://buildify-server.vercel.app",
});

const useAxiosPublic = () => {
  return AxiosPublic;
};

export default useAxiosPublic;
