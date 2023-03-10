import React, { useState } from "react";

const Chat = () => {
  const [text, setText] = useState();
  const handleChange = (e) => setText(e.target.value);
  return (
    <>
      <section className=" flex flex-col w-full h-full relative overflow-y-auto">
        <div className=" z-20 h-16 flex-grow-0 w-full bg-zinc-100 ">
          <div className="flex items-center w-full h-full  pl-2.5 mb-5">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-7"
              alt="Flowbite Logo"
            />
            <span className="text-sm font-semibold whitespace-nowrap text-black ">
              Naruto
            </span>
          </div>
        </div>

        <div className=" overflow-hidden w-full text-black mb-10">
          <div className="z-0 overflow-y-auto scroll-smooth h-screen w-full mx-auto relative  bg-white dark:bg-slate-800 dark:highlight-white/5 shadow-lg ring-1 ring-black/5  flex flex-col divide-y dark:divide-slate-200/5">
            <div className="flex flex-col flex-grow w-full  bg-white shadow-xl overflow-hidden">
              <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
                <div className="flex w-full mt-2 space-x-3 max-w-xs">
                  <img
                    alt=""
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"
                  ></img>
                  <div>
                    <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                    <span className="text-xs text-gray-500 leading-none">
                      2 min ago
                    </span>
                  </div>
                </div>
                <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                  <div>
                    <div className="bg-blue-100 text-blck p-3 rounded-l-lg rounded-br-lg">
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.{" "}
                      </p>
                    </div>
                    <span className="text-xs text-gray-500 leading-none">
                      2 min ago
                    </span>
                  </div>
                  <img
                    alt=""
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"
                  ></img>
                </div>

                <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                  <div>
                    <div className="bg-blue-100 text-black p-3 rounded-l-lg rounded-br-lg">
                      <p className="text-sm">Lorem ipsum dolor sit amet.</p>
                    </div>
                    <span className="text-xs text-gray-500 leading-none">
                      2 min ago
                    </span>
                  </div>
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                </div>
                <div className="flex w-full mt-2 space-x-3 max-w-xs">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                  <div>
                    <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.{" "}
                      </p>
                    </div>
                    <span className="text-xs text-gray-500 leading-none">
                      2 min ago
                    </span>
                  </div>
                </div>
                <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                  <div>
                    <div className="bg-blue-100 text-black p-3 rounded-l-lg rounded-br-lg">
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.{" "}
                      </p>
                    </div>
                    <span className="text-xs text-gray-500 leading-none">
                      2 min ago
                    </span>
                  </div>
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                </div>
                <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                  <div>
                    <div className="bg-blue-100 text-black p-3 rounded-l-lg rounded-br-lg">
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt.
                      </p>
                    </div>
                    <span className="text-xs text-gray-500 leading-none">
                      2 min ago
                    </span>
                  </div>
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                </div>
                <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                  <div>
                    <div className="bg-blue-100 text-black p-3 rounded-l-lg rounded-br-lg">
                      <p className="text-sm">Lorem ipsum dolor sit amet.</p>
                    </div>
                    <span className="text-xs text-gray-500 leading-none">
                      2 min ago
                    </span>
                  </div>
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                </div>
                <div className="flex w-full mt-2 space-x-3 max-w-xs">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                  <div>
                    <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.{" "}
                      </p>
                    </div>
                    <span className="text-xs text-gray-500 leading-none">
                      2 min ago
                    </span>
                  </div>
                </div>
                <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                  <div>
                    <div className="bg-blue-100 text-black p-3 rounded-l-lg rounded-br-lg">
                      <p className="text-sm">Lorem ipsum dolor sit.</p>
                    </div>
                    <span className="text-xs text-gray-500 leading-none">
                      2 min ago
                    </span>
                  </div>
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="z-20 h-10 w-full absolute  bottom-0 right-0  text-black px-3   bg-zink-100">
          <input
            value={text}
            name="text"
            onChange={handleChange}
            className="flex items-center h-10 w-full rounded text-sm"
            type="text"
            placeholder="Type your message???"
          />
        </div>
      </section>
    </>
  );
};

export default Chat;

// Nav Bar
