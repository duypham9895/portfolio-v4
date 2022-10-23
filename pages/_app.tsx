import "../styles/globals.css";
import type { AppProps } from "next/app";
import PortfolioProvider from "../hooks/PortfolioProvider";
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PortfolioProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PortfolioProvider>
  );
}

export default MyApp;
