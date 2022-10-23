import { NextPage, NextPageContext } from "next";
import Link from "next/link";
import HeadTitle from "../components/UI/HeadTitle";

interface Props {
  statusCode?: number;
}

const Error: NextPage<Props> = ({ statusCode = 404 }) => {
  const errorMessage =
    statusCode === 404
      ? "The page you are looking for does not exist"
      : `An error ${statusCode} occurred on server`;

  return (
    <>
      <HeadTitle title="404" />
      <div className="h-screen w-full flex flex-col justify-center items-center bg-homeBg dark:bg-homeBg-dark bg-no-repeat bg-center bg-cover bg-fixed">
        <h1 className="text-7xl leading-none text-black dark:text-white font-extrabold md:text-8xl">
          {statusCode}!
        </h1>
        <p className=" text-medium text-black dark:text-white text-sm capitalize mb-7 mt-6 px-4 text-center">
          {errorMessage}
        </p>

        <Link href="/">
          <a className="flex items-center mx-auto bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l px-8 py-3 text-lg text-black dark:text-white rounded-[5px]">
            Back To Home
          </a>
        </Link>
      </div>
    </>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
