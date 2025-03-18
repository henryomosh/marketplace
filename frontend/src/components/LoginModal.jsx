"use client";

import { useState, Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild
} from "@headlessui/react";
import { userLogin } from "../redux/slice/auth/authActions";
import { reset } from "../redux/slice/auth/loginSlice";

export default function LoginModal({
  openLoginModal,
  setOpenLoginModal,
  openModal,
  setOpenModal
}) {
  const [state, setState] = useState({
    email: "",
    password: ""
  });
  const [errors, setError] = useState({
    email: "",
    password: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowpassword] = useState(false);

  const handleShowPassword = () => {
    if (showPassword) {
      setShowpassword(false);
    } else {
      setShowpassword(true);
    }
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, userInfo, error, success } = useSelector(
    (state) => state.login
  );

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
      email: state.email,
      password: state.password
    };
    dispatch(userLogin(userData));
  };
  useEffect(() => {
    if (userInfo) {
      // navigate("/cart");
      setOpenLoginModal(false);
    }
  }, [navigate, userInfo]);
  return (
    <div>
      <Transition appear show={openLoginModal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 "
          onClose={() => {
            setOpenLoginModal(false);
            dispatch(reset());
          }}
        >
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <DialogBackdrop
              transition
              className="fixed inset-0 bg-black/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
            />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="w-full h-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div
                    class={`absolute  bg-white bg-opacity-80 z-10 h-full w-full flex items-center justify-center  ${
                      loading ? "" : "hidden"
                    }`}
                  >
                    <div class="flex items-center  ">
                      <div className="w-16 h-16 border-8 border-dashed rounded-full  animate-spin border-indigo-600 pr-12 mr-12"></div>
                    </div>
                  </div>
                  <DialogTitle
                    as="h2"
                    className="text-gray-800 text-center text-2xl font-bold"
                  >
                    Sign in
                  </DialogTitle>
                  <form class="mt-8 space-y-4" onSubmit={handleSubmit}>
                    {error && (
                      <div
                        className="bg-red-100 text-red-800 px-2 py-4 rounded-lg"
                        role="alert"
                      >
                        <strong className="font-bold text-sm mr-4">
                          {error}
                        </strong>
                      </div>
                    )}
                    <h6 className="text-red-500"></h6>
                    <div>
                      <label class="text-gray-800 text-sm mb-2 block">
                        User name
                      </label>
                      <div class="relative flex items-center">
                        <input
                          name="email"
                          type="text"
                          required
                          class="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                          placeholder="Enter email"
                          value={state.email}
                          onChange={handleChange}
                        />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#bbb"
                          stroke="#bbb"
                          class="w-4 h-4 absolute right-4"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            cx="10"
                            cy="7"
                            r="6"
                            data-original="#000000"
                          ></circle>
                          <path
                            d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                            data-original="#000000"
                          ></path>
                        </svg>
                      </div>
                    </div>

                    <div>
                      <label class="text-gray-800 text-sm mb-2 block">
                        Password
                      </label>
                      <div className="relative flex items-center">
                        <input
                          name="password"
                          type={`${showPassword ? "text" : "password"}`}
                          required
                          class="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
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
                    </div>

                    <div class="flex flex-wrap items-center justify-between gap-4">
                      <div class="flex items-center">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          class="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label
                          for="remember-me"
                          class="ml-3 block text-sm text-gray-800"
                        >
                          Remember me
                        </label>
                      </div>
                      <div class="text-sm">
                        <Link
                          href=""
                          to={"/password/reset"}
                          class="text-blue-600 hover:underline font-semibold"
                        >
                          Forgot your password?
                        </Link>
                      </div>
                    </div>

                    <div class="!mt-8">
                      <button
                        type="submit"
                        class="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                        onClick={() => {
                          setIsSubmitting(true);
                        }}
                      >
                        Sign in
                      </button>
                    </div>
                    <p class="text-gray-800 text-sm !mt-8 text-center">
                      Don't have an account?{" "}
                      <a
                        href="#"
                        class="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold"
                        onClick={() => {
                          setOpenLoginModal(false);
                          setOpenModal(true);
                          dispatch(reset());
                        }}
                      >
                        Register here
                      </a>
                    </p>
                  </form>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
