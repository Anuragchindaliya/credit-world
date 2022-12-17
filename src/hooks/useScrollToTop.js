// import { usePrevious } from "./usePrevious";
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export const useScrollToTop = ({ ref }) => {
  const { pathname } = useLocation();
  //   const previousPathname = usePrevious(pathname);

  useLayoutEffect(() => {
    // if (pathname === previousPathname || !ref?.current) {
    //   return;
    // }

    // window.scrollTo(0, 0);
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto", // Optional if you want to skip the scrolling animation
    });

    const clearTimer = setTimeout(() => {
      ref?.current?.focus?.();
    }, 100);

    return () => {
      clearTimeout(clearTimer);
    };
  }, [
    pathname,
    // previousPathname,
    ref,
  ]);
};
