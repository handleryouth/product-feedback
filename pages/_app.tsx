import "../styles/globals.css";
import "@fontsource/jost";
import type { AppProps } from "next/app";
import { Layout } from "../components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
