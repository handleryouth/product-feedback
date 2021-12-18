import type { AppProps } from "next/app";
import "@fontsource/jost";
import { Layout } from "../components";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
