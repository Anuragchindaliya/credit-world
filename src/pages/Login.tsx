import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

import crIcon from "../assets/img/coreimg/cwIcon.png";
import Loader from '../components/ui/button/Loader';
import { useLoginMutation } from '../redux/features/auth/authApi';
import { selectCurrentToken, setCredentials } from '../redux/features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setCookie } from '../utils';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const token = useAppSelector(selectCurrentToken);
    const [login, { isLoading }] = useLoginMutation();
    const [passwordType, setPasswordType] = useState(true)
    const handleLoginSubmitClick = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            email: { value: string };
            password: { value: string };
        };
        const email = target.email.value; // typechecks!
        const password = target.password.value; // typechecks!
        const res: any = await login({ email, password })
        if (res?.error?.status >= 400) {
            toast.error(res?.error?.data?.message || "Unauthorize")
            return;
        }
        const { accessToken } = res.data;
        dispatch(setCredentials({ accessToken }));
        setCookie("accessToken", accessToken)
        navigate("/")
    }
    const effectRan = useRef(false);

    useEffect(() => {
        if (effectRan.current || process.env.NODE_ENV !== "development") {
            // const accessToken = getCookie("accessToken")
            if (token) {
                navigate("/")
            }
        }
        return () => { effectRan.current = true };
        // eslint-disable-next-line
    }, []);

    return (
        <section className="bg-gray-50 dark:bg-gray-900 h-screen">
            {/* {isError && (
          <div
            id="alert-2"
            className="absolute right-0 flex p-4 mb-4 bg-red-100 rounded-lg dark:bg-red-200 mx-6 mt-4"
            role="alert"
          >
            <svg
              aria-hidden="true"
              className="flex-shrink-0 w-5 h-5 text-red-700 dark:text-red-800"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Info</span>
            <div className="ml-3 text-sm font-medium text-red-700 dark:text-red-800">
              {error?.data?.message}
            </div>
          </div>
        )} */}
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <Link
                    to={"/"}
                    className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
                >
                    {/* <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          /> */}
                    <h1
                        className="text-blue-900 text-3xl sm:text-[38px] flex"
                    //  font-['Monotype_Broadway_Regular']"
                    >
                        CREDITW
                        <img
                            title="Creditworld"
                            src={crIcon}
                            style={{ width: 35, margin: "auto" }}
                            alt="Creditworld logo"
                        />
                        RLD
                    </h1>

                </Link>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form
                            className="space-y-4 md:space-y-6"
                            // action="#"
                            onSubmit={handleLoginSubmitClick}
                        >
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Your email
                                </label>
                                <input
                                    name="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    //   placeholder="name@company.com"
                                    type="text"
                                    id="email"
                                    //   ref={userRef}
                                    //   value={email}
                                    //   onChange={handleUserInput}
                                    autoComplete="off"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Password
                                </label>
                                <div
                                    className='flex relative'
                                >
                                    <input
                                        type={passwordType ? "password" : "text"}
                                        name={"password"}
                                        id="password"
                                        placeholder="••••••••"
                                        className=" rounded bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-14"
                                        // className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        //   onChange={handlePwdInput}
                                        //   value={password}
                                        required
                                        autoComplete="true"
                                    />
                                    <div
                                        onClick={() => {
                                            setPasswordType((b) => !b)
                                        }}
                                        className="cursor-pointer w-10 m-[2px] absolute right-0 top-0 bottom-0 inline-flex items-center px-3 text-sm text-gray-900 bg-gray-100 hover:bg-gray-200  border border-r-0 border-gray-300 rounded-r-md dark:bg-gray-800 dark:hover:bg-gray-700  dark:text-gray-400 dark:border-gray-600">
                                        <svg
                                            className="h-4"
                                            style={{display:passwordType?"block":"none"}}
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 576 512"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                                            ></path>
                                        </svg>
                                        <svg
                                            className="h-4 "
                                            style={{display:passwordType?"none":"block"}}
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 640 512"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"
                                            ></path>
                                        </svg>

                                    </div>
                                </div>
                            </div>
                            {/* <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="remember"
                                            aria-describedby="remember"
                                            type="checkbox"
                                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                        //   checked={persist}
                                        //   onChange={handlePersistToggle}
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label
                                            htmlFor="remember"
                                            className="text-gray-500 dark:text-gray-300"
                                        >
                                            Remember me
                                        </label>
                                    </div>
                                </div>
                                <a
                                    href="#"
                                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    Forgot password?
                                </a>
                            </div> */}
                            {/* <Link to={"/"}> */}
                            <button
                                type="submit"
                                className="w-full text-white bg-primary-800 hover:bg-primary-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-900 dark:hover:bg-primary-800 dark:focus:ring-primary-800"
                                disabled={isLoading}
                            >
                                {isLoading ? <>
                                    <Loader />
                                    Signing in...
                                </> : <>
                                    Sign in
                                </>}
                            </button>
                            {/* </Link> */}
                            {/* <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet?{" "}
                                <Link
                                    to={"/signup"}
                                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    Sign up
                                </Link>
                            </p> */}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login