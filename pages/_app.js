import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Component {...pageProps} />
      <ToastContainer />
    </React.Fragment>
  );
}

export default MyApp;
