import AOS from "aos";
import { useEffect } from "react";
import type { AppProps } from "next/app";

import "aos/dist/aos.css";
import "../styles/globals.css";

import PortfolioProvider from "../hooks/PortfolioProvider";
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({ duration: 1200 });
    AOS.refresh();
  }, []);
  return (
    <PortfolioProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PortfolioProvider>
  );
}

export default MyApp;
