import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth/useAuth";
import Swal from "sweetalert2";
import { useState } from "react";
import SocialLogin from "../../Components/Banner/SocialLogin/SocialLogin";
import useAxiosSecure from "../../Hooks/useAxiosSecure/useAxiosSecure";

const LoadingScreen = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-75 z-50">
    <span className="loading loading-bars loading-lg text-blue-500"></span>
  </div>
);

const Login = () => {
  const { SingIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const axiosSecure = useAxiosSecure();
  const from = location.state?.from?.pathname || "/lessons";

  const handelSingIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const result = await SingIn(email, password);
      const user = result.user;
      console.log(user);

      // Fetch user role
      const { data } = await axiosSecure.get(`/users/${user?.email}`);
      const userRole = data.role;

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Login Successful",
        showConfirmButton: false,
        timer: 1500,
      });

      // Redirect based on role
      if (userRole === "admin") {
        navigate("/dashboard/lessonsD", { replace: true });
      } else {
        navigate(from, { replace: true });
      }
    } catch (error) {
      console.error("Error during sign in", error);
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Login Failed",
        showConfirmButton: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading && <LoadingScreen />}
      <div className="h-[75px]"></div>
      <div className="p-6">
        <section className="min-h-screen flex items-center justify-center">
          <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
            <div className="md:w-1/2 px-8 md:px-16">
              <h2 className="font-bold text-2xl text-[#ce9451]">
                Sign In Now!
              </h2>
              <p className="text-xs mt-4 text-[#002D74]">
                If you are already a member, easily sign in.
              </p>
              <form onSubmit={handelSingIn} className="flex flex-col gap-4">
                <input
                  className="p-2 mt-8 rounded-xl border"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <div className="relative">
                  <input
                    className="p-2 rounded-xl border w-full"
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="gray"
                    className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                  </svg>
                </div>
                <button className="bg-[#c08f57] rounded-xl text-white py-2 hover:scale-105 duration-300">
                  Sign In
                </button>
              </form>
              <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
                <hr className="border-gray-400" />
                <p className="text-center text-sm">OR</p>
                <hr className="border-gray-400" />
              </div>
              <SocialLogin name="Sing In"></SocialLogin>

              <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
                <a href="#">Forgot your password?</a>
              </div>
              <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
                <p>Do not have an account?</p>
                <Link to="/register">
                  <button className="py-2 px-5 bg-[#aa865c] text-white hover:bg-color-3 border rounded-xl hover:scale-110 duration-300">
                    Register
                  </button>
                </Link>
              </div>
            </div>
            <div className="md:block hidden w-1/2">
              <img
                className="rounded-2xl"
                src="https://i.postimg.cc/yNwDkT1N/Default-my-need-not-pinkis-yheme-my-need-minimalist-brownish-t-0.jpg"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
