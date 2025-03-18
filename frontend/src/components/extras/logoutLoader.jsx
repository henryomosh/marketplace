import React from "react";

const LogoutLoader = () => {
  return (
    <div>
      <div class="absolute  bg-white bg-opacity-100 z-50 h-full w-full flex items-center justify-center overflow-hidden">
        <div class="flex items-center  ">
          <div className="bg-blue-100 text-blue-800 p-6 rounded-lg font-xl">
            LOGGED OUT
          </div>
          <div className="w-16 h-16 border-8 border-dashed rounded-full  animate-spin border-indigo-600 pr-12 mr-12"></div>
        </div>
      </div>
    </div>
  );
};
export default LogoutLoader;
