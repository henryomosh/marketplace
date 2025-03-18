"use client";
import { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  DialogTitle
} from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
  UserIcon
} from "@heroicons/react/24/solid";
import { useGetUserDetailsQuery } from "../redux/slice/auth/authService";
import FlyoutLink from "./flyout/FlyoutLink";
import DropDownMenu from "./flyout/DropDownMenu";
import SignupModal from "./SignupModal";
import LoginModal from "./LoginModal";
import SearchModal from "./SearchModal";
import { setCredentials } from "../redux/slice/auth/loginSlice";
import { useDispatch, useSelector } from "react-redux";
import StaggeredDropDown from "./flyout/Staggered";

const navigation = {
  categories: [
    {
      id: "brand",
      name: "Our Brands"
    },
    {
      id: "devices",
      name: "Wireless Devices"
    },
    {
      id: "cabling",
      name: "Structured Cabling"
    },
    {
      id: "optic",
      name: "Fibre Optic"
    },
    {
      id: "cameras",
      name: "Security Cameras"
    }
  ],
  pages: [
    { name: "Company", href: "#" },
    { name: "Stores", href: "#" }
  ]
};

export default function Example() {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSearchModal, setOpenSearchModal] = useState(false);

  const { loading, isAuthenticated, error, success } = useSelector(
    (state) => state.login
  );

  const userInfo = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();

  let [userData, setUserData] = useState("");
  // const { data, isFetching } = useGetUserDetailsQuery("userDetails", {
  //   // perform a refetch every 15mins
  //   pollingInterval: 900000
  // });

  useEffect(() => {
    if (userInfo) {
      setUserData(userInfo.user.email);

      dispatch(setCredentials());
    }
  }, [userInfo, dispatch]);

  return (
    <div>
      <div className="bg-white pb-0.5">
        {/* Modals */}
        <SignupModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          openLoginModal={openLoginModal}
          setOpenLoginModal={setOpenLoginModal}
        />
        <LoginModal
          openLoginModal={openLoginModal}
          setOpenLoginModal={setOpenLoginModal}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
        <SearchModal
          openSearchModal={openSearchModal}
          setOpenSearchModal={setOpenSearchModal}
        />

        {/* Mobile menu */}
        <Dialog
          open={open}
          onClose={setOpen}
          className="relative z-40 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
            >
              <div className="flex px-4 pb-2 pt-5">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>

              {/* Links */}

              <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                {navigation.categories.map((item) => (
                  <div className="flow-root">
                    <a
                      href="#"
                      className="-m-2 block p-2 font-medium text-gray-600"
                    >
                      {item.name}
                    </a>
                  </div>
                ))}
                <div className="flow-root">
                  <a
                    href="#"
                    className="-m-2 block p-2 pt-8 font-medium text-gray-900 border-t border-gray-200"
                  >
                    Sign in
                  </a>
                </div>
                <div className="flow-root">
                  <a
                    href="#"
                    className="-m-2 block p-2 font-medium text-gray-900"
                  >
                    Create account
                  </a>
                </div>
              </div>

              <div className="border-t border-gray-200 px-4 py-6">
                <a href="#" className="-m-2 flex items-center p-2">
                  <img
                    alt=""
                    src="https://tailwindui.com/plus-assets/img/flags/flag-canada.svg"
                    className="block h-auto w-5 shrink-0"
                  />
                  <span className="ml-3 block text-base font-medium text-gray-900">
                    CAD
                  </span>
                  <span className="sr-only">, change currency</span>
                </a>
              </div>
            </DialogPanel>
          </div>
        </Dialog>

        <header className="relative bg-white">
          <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-base font-medium text-white sm:px-6 lg:px-8">
            Call us on{" "}
            <span className="px-1 lg:px-4 text-orange-400">+254708663296 </span>{" "}
            or email us on{" "}
            <span className="px-1 lg:px-4 text-orange-400">
              sales@storetown.co.ke
            </span>
          </p>

          <nav aria-label="Top" className="mx-auto max-w-7xl sm:px-6 ">
            <div className="border-b border-gray-200 ">
              <div className="flex h-16 items-center">
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open menu</span>
                  <Bars3Icon aria-hidden="true" className="size-6" />
                </button>

                {/* Logo */}
                <div className="ml-4 flex lg:ml-0">
                  <Link href="#" to={"/"}>
                    <span className="sr-only">Your Company</span>
                    <img
                      alt=""
                      src="/images/brand-01.png"
                      className="h-12 w-auto"
                    />
                  </Link>
                </div>

                {/* Flyout menus */}
                <div className="hidden lg:ml-8 lg:block lg:self-stretch pt-5">
                  <div className="flex h-full space-x-8">
                    <div className="flex">
                      {navigation.categories.map((item) => (
                        <div className="relative flex mr-5">
                          <FlyoutLink href="#" FlyoutContent={DropDownMenu}>
                            <div className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-md font-bold text-gray-700 transition-colors duration-300 ease-out  data-[open]:border-indigo-600 data-[open]:text-indigo-600 px-2">
                              {item.name}
                            </div>
                          </FlyoutLink>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="ml-auto flex items-center">
                  {/* Search */}
                  <div className="flex lg:ml-6">
                    <a
                      href="#"
                      className="p-2 text-gray-700 transition  delay-150 duration-300 ease-in-out hover:text-indigo-600"
                    >
                      <span className="sr-only">Search</span>
                      <MagnifyingGlassIcon
                        aria-hidden="true"
                        onClick={() => setOpenSearchModal(true)}
                        className="size-6"
                      />
                    </a>
                  </div>

                  {/* Account */}
                  {!isAuthenticated && (
                    <div className="flex lg:ml-6">
                      <a
                        href="#"
                        className="p-2 text-gray-700 transition  delay-150 duration-300 ease-in-out hover:text-indigo-600"
                      >
                        <span className="sr-only">Search</span>
                        <UserIcon
                          aria-hidden="true"
                          onClick={() => setOpenModal(true)}
                          className="size-6"
                        />
                      </a>
                    </div>
                  )}

                  {isAuthenticated && (
                    <div className="flex lg:ml-6">
                      <a
                        href="#"
                        className="py-2 px-0.5 text-green-700 transition  delay-150 duration-300 ease-in-out hover:text-indigo-600"
                      >
                        <span className="sr-only">Search</span>
                        <StaggeredDropDown />
                      </a>
                      <span className="pt-3.5 text-sm">
                        <strong>{userData.split("@")[0]}</strong>{" "}
                      </span>
                    </div>
                  )}

                  {/* Cart */}
                  <div className="ml-4 flow-root lg:ml-6">
                    <Link
                      href="#"
                      to={"/cart"}
                      className="relative group -m-2 flex items-center p-2"
                    >
                      <ShoppingBagIcon
                        aria-hidden="true"
                        className={`size-6 shrink-0 ${
                          isAuthenticated ? "text-green-700" : "text-gray-700"
                        } transition  delay-50 duration-200 ease-in-out hover:text-indigo-800`}
                      />
                      <span class="absolute inset-0 object-right-top -mr-6 left-7">
                        <div class="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white">
                          0
                        </div>
                      </span>

                      <span className="sr-only">items in cart, view bag</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
}
