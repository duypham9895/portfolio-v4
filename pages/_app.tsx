import AOS from "aos";
import { useEffect } from "react";
import type { AppProps } from "next/app";

import "aos/dist/aos.css";
import "../styles/globals.css";

import PortfolioProvider from "../hooks/PortfolioProvider";
import Layout from "../components/layout/Layout";
import StrapiApolloProvider from "../graphql";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({ duration: 1200 });
    AOS.refresh();
  }, []);
  return (
    <PortfolioProvider>
      <StrapiApolloProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StrapiApolloProvider>
    </PortfolioProvider>
  );
}

export default MyApp;
