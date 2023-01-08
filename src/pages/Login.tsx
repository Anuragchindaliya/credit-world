import React, { useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

import crIcon from "../assets/img/coreimg/cwIcon.png";
import { useLoginMutation } from '../redux/features/auth/authApi';
import { selectCurrentToken, setCredentials } from '../redux/features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setCookie } from '../utils';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const token = useAppSelector(selectCurrentToken);
    const [login, { isLoading, isError, error }] = useLoginMutation();
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
        console.log(email, password, res)
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
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    //   onChange={handlePwdInput}
                                    //   value={password}
                                    required
                                    autoComplete="true"
                                />
                            </div>
                            <div className="flex items-center justify-between">
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
                            </div>
                            {/* <Link to={"/"}> */}
                            <button
                                type="submit"
                                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                disabled={isLoading}
                            >
                                {isLoading ? <>Signing in..</> : <>Sign in</>}
                            </button>
                            {/* </Link> */}
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet?{" "}
                                <Link
                                    to={"/signup"}
                                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    Sign up
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login