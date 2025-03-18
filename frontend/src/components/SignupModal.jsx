"use client";
import { useDispatch, useSelector } from "react-redux";
import { useState, Fragment, useEffect } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild
} from "@headlessui/react";

import { registerUser } from "../redux/slice/auth/authActions";
import { reset } from "../redux/slice/auth/authSlice";

export default function SignupModal({
  openModal,
  setOpenModal,
  openLoginModal,
  setOpenLoginModal
}) {
  const {
    loading,
    userInfo,
    error,
    success,
    emailError,
    passwordError,
    eEmail,
    ePassword
  } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    email: "",
    password: ""
  });

  const [showPassword, setShowpassword] = useState(false);

  const [errors, setError] = useState({
    email: "",
    password: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  console.log(emailError);

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
    const userData = {
      email: state.email,
      password: state.password
    };

    dispatch(registerUser(userData));
  };
  useEffect(() => {
    if (loading) {
      setTimeout(async () => {
        setIsSubmitting(true);
        if (success) {
          await setOpenModal(false);
          await setOpenLoginModal(true);
          state.email = "";
          state.password = "";
        }
      }, 500);
    } else {
      setTimeout(() => {
        setIsSubmitting(false);
      }, 500);
    }
  }, [loading]);

  return (
    <div>
      <Transition appear show={openModal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40"
          onClose={() => {
            setOpenModal(false);
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
                <DialogPanel className="relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white px-6 py-3 text-left align-middle shadow-xl transition-all">
                  <div
                    class={`absolute  bg-white bg-opacity-90 z-10 h-full w-full flex items-center justify-center ${
                      isSubmitting ? "" : "hidden"
                    }`}
                  >
                    <div class="flex items-center  ">
                      <div className="w-16 h-16 border-8 border-dashed rounded-full  animate-spin border-indigo-600 pr-12 mr-12"></div>
                    </div>
                  </div>
                  <DialogTitle
                    as="h2"
                    className="text-gray-800 text-center text-2xl font-bold mb-3"
                  >
                    Sign Up
                  </DialogTitle>

                  <form onSubmit={handleSubmit}>
                    <div class="space-y-6">
                      <div>
                        <label class="text-gray-800 text-sm mb-2 block">
                          Email :
                        </label>
                        <input
                          name="email"
                          type="text"
                          className={`text-gray-800 bg-white border  w-full text-sm px-4 py-3 rounded-md ${
                            eEmail
                              ? "border-red-300 outline-red-500"
                              : "border-gray-300 outline-blue-500"
                          }
                           
                          `}
                          placeholder="Enter email"
                          value={state.email}
                          onChange={handleChange}
                        />
                        <h6 className="text-red-500">{emailError}</h6>
                      </div>
                      <div>
                        <label class="text-gray-800 text-sm mb-2 block">
                          Password :
                        </label>
                        <div className="relative flex items-center">
                          <input
                            name="password"
                            type={`${showPassword ? "text" : "password"}`}
                            className={`text-gray-800 bg-white border  w-full text-sm px-4 py-3 rounded-md ${
                              ePassword
                                ? "border-red-300 outline-red-500"
                                : "border-gray-300 outline-blue-500"
                            }
                           
                          `}
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
                        <h6 className="text-red-500">{passwordError}</h6>
                      </div>
                      <div class="flex items-center">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          class="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label
                          for="remember-me"
                          class="text-gray-800 ml-3 block text-sm"
                        >
                          I accept the{" "}
                          <a
                            href="javascript:void(0);"
                            class="text-blue-600 font-semibold hover:underline ml-1"
                          >
                            Terms and Conditions
                          </a>
                        </label>
                      </div>
                    </div>

                    <div class="!mt-8">
                      <button
                        type="submit"
                        class="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                        onClick={() => {
                          setIsSubmitting(true);
                        }}
                      >
                        Create an account
                      </button>
                    </div>
                    <p class="text-gray-800 text-sm mt-6 text-center">
                      Already have an account?{" "}
                      <a
                        href="#"
                        class="text-blue-600 font-semibold hover:underline ml-1"
                        onClick={() => {
                          setOpenModal(false);
                          setOpenLoginModal(true);
                          dispatch(reset());
                        }}
                      >
                        Login here
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
