const SlideToogle = ({ isDarkMode, toggle }: any) => {
    return (
      <button
        // `title` did not match. Server: "Light Mode" Client: "Dark Mode
        // suppressHydrationWarning
        title={isDarkMode ? "Go Dark Mode" : "Go Light Mode"}
        className={
          " relative m-2 inline-flex h-7 w-14 cursor-pointer items-center rounded-full bg-gray-200 focus:outline-none focus:ring-4 focus:ring-blue-800 dark:border-gray-600  dark:bg-blue-600 dark:focus:ring-blue-300"
        }
        type="button"
        onClick={toggle}
      >
        <div
          className={
            "  absolute left-[4px]  top-[2px] mr-2 flex h-6  w-6 items-center  justify-center rounded-full border border-gray-300 bg-white text-xs  font-medium text-gray-700 transition-all  hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:translate-x-full  dark:border-gray-600 dark:text-gray-400 dark:focus:ring-gray-500 "
          }
        >
          <svg
            aria-hidden="true"
            data-toggle-icon="sun"
            className="h-4 w-4 dark:hidden "
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
  
          <svg
            aria-hidden="true"
            data-toggle-icon="moon"
            className="hidden h-4 w-4 dark:block"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
          <span className="sr-only">Toggle dark/light mode</span>
        </div>
      </button>
    );
  };
  export default SlideToogle;