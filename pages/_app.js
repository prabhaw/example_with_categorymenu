import App from "next/app";
import Head from "next/head";
import { wrapper } from "./../Redux/store";
// import "./../styles/bootstrap.css";
import "./../styles/globals.scss";
import 'rc-menu/assets/index.css';
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
    </Head>;
    return <Component {...pageProps} />;
  }
}

export default wrapper.withRedux(MyApp);
