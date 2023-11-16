import React from "react";

const Content = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-2 mx-auto">
          <div class="flex flex-col  w-full mb-4">
            <h1 class="sm:text-base text-xs font-medium title-font mb-2 text-gray-400">
              Revolutionize Your
            </h1>
            <h1 class="sm:text-6xl text-xl font-medium title-font  text-black">
              Creative Projects with
            </h1>
            <h1 class="sm:text-6xl text-xl font-medium title-font  text-black">
              the Ultimate AI-Powered
            </h1>
            <h1 className="sm:text-6xl text-xl font-medium title-font text-black  flex   ">
              Pattern
              <span className="flex ">
                {" "}
                <button className="uppercase text-white bg-black sm:text-xs text-[6px] sm:ml-5 ml-2 rounded-full sm:p-2 p-1 py-0 sm:h-10 h-4 sm:mt-4 mt-2 px-2 mb-5 flex items-center">
                  start generating
                </button>{" "}
                <span className="text-gray-400 sm:text-sm sm:ml-5 ml-2 text-xs sm:pt-2 pt-0  ">
                  {" "}
                  <div className=" sm:text-sm text-[9px]">
                    The Next generation
                  </div>
                  <div className="text-black  sm:text-sm text-[9px] ">
                    Production
                    <span className="text-gray-400 sm:text-sm text-[9px]">
                      {" "}
                      for Designers
                    </span>
                  </div>
                </span>
              </span>
            </h1>
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-2 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/3 ">
              <div class="h-full   border-opacity-60 rounded-lg overflow-hidden">
                <img
                  class="h-full w-full object-cover object-center"
                  src="https://images.pexels.com/photos/4590785/pexels-photo-4590785.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="blog"
                />
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="h-full   border-opacity-60 rounded-lg overflow-hidden">
                <img
                  class="h-full w-full object-cover object-center"
                  src="https://images.pexels.com/photos/10019032/pexels-photo-10019032.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="blog"
                />
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="h-full   border-opacity-60 rounded-lg overflow-hidden">
                <img
                  class="h-full w-full object-cover object-center"
                  src="https://images.pexels.com/photos/6985045/pexels-photo-6985045.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="blog"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content;
