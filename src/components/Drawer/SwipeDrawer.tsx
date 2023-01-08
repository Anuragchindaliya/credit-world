import React, { useEffect, useState } from 'react'

const SwipeDrawer = () => {
  const [lastYPos, setLastYPos] = useState(0);
  const [shouldShowActions, setShouldShowActions] = useState(false);


    const [drawerShow, setDrawerShow] = useState(false);
    useEffect(() => {
        function handleScroll() {
          const yPos = window.scrollY;
          const isScrollingUp = yPos < lastYPos;
    
          setShouldShowActions(isScrollingUp);
          setLastYPos(yPos);
        }
    
        window.addEventListener("scroll", handleScroll, false);
    
        return () => {
          window.removeEventListener("scroll", handleScroll, false);
        };
      }, [lastYPos]);
    return (
        <>
            {/* drawer init and toggle
            <div className="text-center">
                <button
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    type="button"
                    data-drawer-target="drawer-swipe"
                    data-drawer-show="drawer-swipe"
                    data-drawer-placement="bottom"
                    data-drawer-edge="true"
                    data-drawer-edge-offset="bottom-[60px]"
                    aria-controls="drawer-swipe"
                >
                    Show swipeable drawer
                </button>
            </div> */}
            {/* drawer component */}
            <div
                className={`md:hidden fixed z-40 w-full overflow-y-auto bg-white border-t border-gray-200 rounded-t-lg dark:border-gray-700 dark:bg-gray-800 transition-all  left-0 right-0  ${shouldShowActions?"":"-bottom-40"} ${drawerShow ? "transform-none bottom-0" : " translate-y-full bottom-[60px]"} `}
                tabIndex={-1}
                aria-labelledby="drawer-swipe-label"
                aria-hidden="true"
            >
                <div
                    className="p-4"
                    // className="p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700"
                    data-drawer-toggle="drawer-swipe"
                
                >
                    <span className="absolute w-8 h-1 -translate-x-1/2 bg-gray-300 rounded-lg top-3 left-1/2 dark:bg-gray-600" />
                    <div>
                        <h5
                            id="drawer-swipe-label"
                            className="cursor-pointer inline-flex items-center text-base text-gray-500 dark:text-gray-400"
                            onClick={() => {
                                setDrawerShow(!drawerShow)
                            }}
                        >
                            <svg
                                className="w-5 h-5 mr-2"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
                            </svg>
                            <span className='sr-only'>Add widget</span>
                        </h5>
                        <h5
                            id="drawer-swipe-label"
                            className="inline-flex items-center text-base text-gray-500 dark:text-gray-400"
                        >
                            <svg
                                className="w-5 h-5 mr-2"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
                            </svg>
                            <span className='sr-only'>Add widget</span>
                        </h5>
                    </div>  
                </div>
                <div className="grid grid-cols-3 gap-4 p-4 lg:grid-cols-4">
                    <div className="p-4 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-600 dark:bg-gray-700">
                        <div className="flex justify-center items-center p-2 mx-auto mb-2 max-w-[48px] bg-gray-200 dark:bg-gray-500 rounded-full w-18 h-18">
                            <svg
                                className="inline w-8 h-8 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                            </svg>
                        </div>
                        <div className="font-medium text-center text-gray-500 dark:text-gray-400">
                            Chart
                        </div>
                    </div>
                    <div className="p-4 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-600 dark:bg-gray-700">
                        <div className="flex justify-center items-center p-2 mx-auto mb-2 max-w-[48px] bg-gray-200 dark:bg-gray-500 rounded-full w-18 h-18">
                            <svg
                                className="inline w-8 h-8 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="font-medium text-center text-gray-500 dark:text-gray-400">
                            Table
                        </div>
                    </div>
                    <div className="hidden p-4 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-600 dark:bg-gray-700 lg:block">
                        <div className="flex justify-center items-center p-2 mx-auto mb-2 max-w-[48px] bg-gray-200 dark:bg-gray-500 rounded-full w-18 h-18">
                            <svg
                                className="inline w-8 h-8 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 100 4v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 100-4V6z" />
                            </svg>
                        </div>
                        <div className="hidden font-medium text-center text-gray-500 dark:text-gray-400">
                            Ticket
                        </div>
                    </div>
                    <div className="p-4 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-600 dark:bg-gray-700">
                        <div className="flex justify-center items-center p-2 mx-auto mb-2 max-w-[48px] bg-gray-200 dark:bg-gray-500 rounded-full w-18 h-18">
                            <svg
                                className="inline w-8 h-8 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                <path
                                    fillRule="evenodd"
                                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="font-medium text-center text-gray-500 dark:text-gray-400">
                            List
                        </div>
                    </div>
                    <div className="p-4 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-600 dark:bg-gray-700">
                        <div className="flex justify-center items-center p-2 mx-auto mb-2 max-w-[48px] bg-gray-200 dark:bg-gray-500 rounded-full w-18 h-18">
                            <svg
                                className="inline w-8 h-8 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="font-medium text-center text-gray-500 dark:text-gray-400">
                            Price
                        </div>
                    </div>
                    <div className="p-4 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-600 dark:bg-gray-700">
                        <div className="flex justify-center items-center p-2 mx-auto mb-2 max-w-[48px] bg-gray-200 dark:bg-gray-500 rounded-full w-18 h-18">
                            <svg
                                className="inline w-8 h-8 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                            </svg>
                        </div>
                        <div className="font-medium text-center text-gray-500 dark:text-gray-400">
                            Users
                        </div>
                    </div>
                    <div className="hidden p-4 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-600 dark:bg-gray-700 lg:block">
                        <div className="flex justify-center items-center p-2 mx-auto mb-2 max-w-[48px] bg-gray-200 dark:bg-gray-500 rounded-full w-18 h-18">
                            <svg
                                className="inline w-8 h-8 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="font-medium text-center text-gray-500 dark:text-gray-400">
                            Task
                        </div>
                    </div>
                    <div className="p-4 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-600 dark:bg-gray-700">
                        <div className="flex justify-center items-center p-2 mx-auto mb-2 max-w-[48px] bg-gray-200 dark:bg-gray-500 rounded-full w-18 h-18">
                            <svg
                                className="inline w-8 h-8 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                            </svg>
                        </div>
                        <div className="font-medium text-center text-gray-500 dark:text-gray-400">
                            Custom
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default SwipeDrawer