import { useDispatch, useSelector } from "react-redux";
import { useState, Fragment, useEffect } from "react";
import { setPassword } from "../redux/slice/auth/authActions";
import { useSearchParams } from "react-router-dom";

function SetPasswordSection() {
  const { loading, error, success } = useSelector((state) => state.setPassword);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    password: "",
    token: ""
  });
  const [searchParams] = useSearchParams();

  const [showPassword, setShowpassword] = useState(false);

  const handleShowPassword = () => {
    if (showPassword) {
      setShowpassword(false);
    } else {
      setShowpassword(true);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    state.token = searchParams.get("token");
    const userData = {
      password: state.password,
      token: state.token
    };
    console.log(state.token);
    dispatch(setPassword(userData));
  };
  return (
    <div className="pb-12">
      <div class="flex gap-4 max-sm:flex-col items-center justify-center text-center bg-blue-600 text-white px-6 py-3.5 rounded font-[sans-serif] ">
        <h1 class="text-5xl max-sm:text-3xl font-extrabold leading-tight  ">
          Set new password
        </h1>
      </div>
      <div class="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4 mb-12">
        <div
          class={`bg-green-100 text-green-800 p-6 rounded-lg ${
            success ? "" : "hidden"
          }`}
          role="alert"
        >
          <div className="items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
          <strong class="font-bold text-sm mr-4">Success!{""}</strong>
          <span class="block text-sm sm:inline max-sm:mt-2">
            Password reset successfully. You can login to your account with new
            password
          </span>
        </div>
        <div class={`p-6 ${success ? "hidden" : ""}`}>
          <form onSubmit={handleSubmit}>
            <h1 className="mb-4 text-lg ">Enter your neww password</h1>
            <div className="relative flex items-center">
              <input
                name="password"
                type={`${showPassword ? "text" : "password"}`}
                className="text-gray-800 bg-white border  w-full text-sm px-4 py-3 rounded-md border-gray-300 outline-blue-500"
                placeholder="Enter password"
                value={state.password}
                onChange={handleChange}
              />
              <svg
                onClick={() => handleShowPassword()}
                xmlns="http://www.w3.org/2000/svg"
                fill="#bbb"
                stroke="#bbb"
                class="w-4 h-4 absolute right-4 cursor-pointer"
                viewBox="0 0 128 128"
              >
                <path
                  d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                  data-original="#000000"
                ></path>
              </svg>
            </div>
            <h6 className="text-red-500">{error}</h6>
            <div className="pt-4">
              <button
                type="submit"
                className="py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex">
                    <div className="w-6 h-6 border-2 border-dashed  rounded-full  animate-spin border-gray-100 pr-2 mr-2"></div>
                    <span className="mt-1">Processing ...</span>
                  </div>
                ) : (
                  "Reset password"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default SetPasswordSection;
