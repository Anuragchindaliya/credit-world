import React, {
  useEffect, useRef,
  // useState
} from "react";
import { useSelector } from "react-redux";
import {
  // Link,
  Outlet, useNavigate
} from "react-router-dom";
// import usePersist from "../../hools/usePersist";
// import { useRefreshMutation } from "./authApi";
import { selectCurrentToken } from "./authSlice";

const PersistLogin = () => {
  // const [persist] = usePersist();
  const token = useSelector(selectCurrentToken);
  const effectRan = useRef(false);
  const navigate = useNavigate()

  // const [refresh, { isUninitialized, isLoading, isSuccess, isError, error }] = useRefreshMutation();

  // const [trueSuccess, setTrueSuccess] = useState(false);
  // useEffect(() => {
  //   if (effectRan.current || process.env.NODE_ENV !== "development") {
  //     const verifyRefreshToken = async () => {
  //       console.log("verifying refresh token");
  //       try {
  //         //   const response = 
  //         await refresh(1);
  //         //   console.log("rfreshed token",{response})
  //         setTrueSuccess(true)
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     };

  //     // if (!token && persist) verifyRefreshToken();
  //     if (!token) verifyRefreshToken();
  //   }
  //   return () => { effectRan.current = true };
  //   // eslint-disable-next-line
  // }, []);

  useEffect(() => {
    if (effectRan.current || process.env.NODE_ENV !== "development") {
      // const accessToken = getCookie("accessToken")
      if (!token) {
        navigate("/login")
      }
    }
    return () => { effectRan.current = true };
    // eslint-disable-next-line
  }, []);

  // let content;
  // // if (!persist) { // persist: no
  // //   console.log('no persist')
  // //   content = <Outlet />
  // // } else 
  // if (isLoading) { //persist: yes, token: no
  //   console.log('loading')
  //   content = <p>Loading...</p>
  // } else if (isError) { //persist: yes, token: no
  //   console.log('error')
  //   content = (
  //     <p className='errmsg'>
  //       {/* {`${error?.data?.message} - `} */}
  //       <Link to="/login">Please login again</Link>.
  //     </p>
  //   )
  // } else if (isSuccess && trueSuccess) { //persist: yes, token: yes
  //   console.log('success')
  //   content = <Outlet />
  // } else if (token && isUninitialized) { //persist: yes, token: yes
  //   console.log('token and uninit')
  //   console.log(isUninitialized)
  //   content = <Outlet />
  // }

  // return content
  return <Outlet />
};

export default PersistLogin;
