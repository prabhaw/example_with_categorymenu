import { useEffect, useState } from "react";
import Navbar from "../components/chakraNav/Navbar.component";
import theme from "./../theme";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import Loading from "./../components/Loading/Loading";
import Router from "next/router";

// Router.events.on('routeChangeError', () => NProgress.done())

const PublicLayout = (props) => {
  // const router = useRouter();
  const [loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", () => setLoading(false));

  // useEffect(() => {
  //   const handleStart = (url) => url !== router.pathname && setLoading(true);
  //   // handleComplete event was not firing
  //   const handleComplete = (url) =>
  //     url === router.pathname && setLoading(false);

  //   router.events.on("routeChangeStart", handleStart);
  //   router.events.on("routeChangeComplete", handleComplete);
  //   router.events.on("routeChangeError", handleComplete);

  //   return () => {
  //     router.events.off("routeChangeStart", handleStart);
  //     router.events.off("routeChangeComplete", handleComplete);
  //     router.events.off("routeChangeError", handleComplete);
  //   };
  // });

  return loading ? (
    <Loading />
  ) : (
    <ThemeProvider theme={theme}>
      <CSSReset />

      <div className='site-navbar'>
        <Navbar />
      </div>
      <div className='body-part'>{props.children}</div>
      <div className='footer'></div>
    </ThemeProvider>
  );
};
export default PublicLayout;
