"use client";

import { useState, Fragment } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild
} from "@headlessui/react";

export default function SearchModal({ openSearchModal, setOpenSearchModal }) {
  return (
    <div>
      <Transition appear show={openSearchModal} as={Fragment}>
        <Dialog as="div" className="relative z-40" onClose={setOpenSearchModal}>
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
            <div className="flex  w-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="w-full h-full max-w-xl transform overflow-hidden rounded-md bg-white p-6 text-left align-middle  transition-all">
                  <div class=" flex justify-center items-center">
                    <form>
                      <div class="relative">
                        <input
                          type="text"
                          className="bg-white h-12 px-5 pr-10 rounded-full text-lg transition-all duration-300 ease-in-out border-2 border-indigo-500 focus:outline-indigo-600 w-64 focus:w-96"
                          // class="bg-white h-10 px-5 pr-10 rounded-full text-md border-2 focus:border-indigo-600 focus:outline-hidden transition-all duration-300 ease-in-out w-64 focus:w-96 "
                          placeholder="Search something..."
                          // onfocus="this.classList.remove('w-64'); this.classList.add('w-96 border-indigo-500');"
                          // onblur="if(this.value === '') { this.classList.remove('w-96'); this.classList.add('w-64');}"
                        />
                        <button
                          type="submit"
                          class="absolute right-0 top-0 mt-4 mr-4 text-indigo-500"
                        >
                          <svg
                            class="h-5 w-5 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                          </svg>
                        </button>
                      </div>
                    </form>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
