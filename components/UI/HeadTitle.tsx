import Head from "next/head";
import React from "react";

type Props = {
  title: string;
  name?: string;
  content?: string;
};

const DEFAULT_TITLE = "Edward's Portfolio";

const HeadTitle = ({ title, name = "description", content }: Props) => {
  const modifiedContent = content
    ? `${content} - ${DEFAULT_TITLE}`
    : DEFAULT_TITLE;

  const modifiedTitle = `${title} - ${DEFAULT_TITLE}`;

  return (
    <Head>
      <title>{modifiedTitle}</title>
      <meta name={name} content={modifiedContent} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadTitle;
