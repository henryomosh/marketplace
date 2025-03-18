import { useDispatch, useSelector } from "react-redux";
import { useState, Fragment, useEffect } from "react";
import { passwordReset } from "../redux/slice/auth/authActions";

function PasswordResetSection() {
  const { loading, error, success } = useSelector((state) => state.password);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    email: ""
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: state.email
    };
    dispatch(passwordReset(userData));
  };
  return (
    <div className="pb-12">
      <div class="flex gap-4 max-sm:flex-col items-center justify-center text-center bg-blue-600 text-white px-6 py-3.5 rounded font-[sans-serif] ">
        <h1 class="text-5xl max-sm:text-3xl font-extrabold leading-tight  ">
          Reset Password
        </h1>
      </div>
      <div class="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4 mb-12">
        <div
          class={`bg-blue-100 text-blue-800 p-6 rounded-lg ${
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
              className="size-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
              />
            </svg>
          </div>
          <strong class="font-bold text-sm mr-4">
            An email with link was send to you. Check your inbox and follow the
            link to reset your password!{" "}
          </strong>
          <span class="block text-sm sm:inline max-sm:mt-2"></span>
        </div>
        <div class={`p-6 ${success ? "hidden" : ""}`}>
          <form onSubmit={handleSubmit}>
            <h1 className="mb-4 text-lg ">Enter your email</h1>
            <input
              name="email"
              type="text"
              className="text-gray-800 bg-white border  w-full text-sm px-4 py-3 rounded-md border-gray-300 outline-blue-500"
              placeholder="Enter your email"
              value={state.email}
              onChange={handleChange}
            />
            <h4 className="text-red-400">{error}</h4>
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
export default PasswordResetSection;
