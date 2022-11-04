import Image from "next/image";
import React, { useContext, useState } from "react";
import {
  FaDribbble,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { BsXCircle } from "react-icons/bs";

import HeadTitle from "../../components/UI/HeadTitle";
import PortfolioContext from "../../hooks/portfolio-context";

type Props = {};

const Blog = (props: Props) => {
  const { defaultTheme } = useContext(PortfolioContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <HeadTitle title="Blog" />
      {/* End pagetitle */}

      <section className="bg-white  lg:rounded-2xl dark:bg-[#111111]">
        <div data-aos="fade">
          <div className="container px-4 sm:px-5 md:px-10 lg:px-[60px]">
            <div className="py-12">
              {/* Blog page title */}
              <h2 className="after-effect after:left-32 mt-12 lg:mt-0">
                Blogs
              </h2>
              <div
                className={`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-[40px] grid gap-x-10 gap-y-7 mb-6`}
              >
                {/* Blog items start */}
                {/* {blogsData.slice(0, count).map((item) => {
                  return (
                  );
                })} */}
                <div
                  // key={item.id}
                  style={{
                    background: `${
                      defaultTheme === "dark" ? "transparent" : "#EEF5FA"
                    }`,
                  }}
                  className="p-5 rounded-lg mb-2 h-full dark:border-[#212425] dark:border-2"
                >
                  <div className="overflow-hidden rounded-lg">
                    {/* <img
                          onClick={() => handleModle(item?.id)}
                          className="rounded-lg w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110"
                          src={item?.imgSmall}
                          alt=""
                        /> */}
                  </div>
                  <div className="flex mt-4 text-tiny text-gray-lite dark:text-[#A6A6A6]">
                    <span>2022-01-01</span>
                    <span className="pl-6 relative after:absolute after:h-1 after:w-1 after:bg-gray-lite after:rounded-full after:left-2 after:top-[50%] transform after:-translate-y-1/2">
                      Web Develop
                    </span>
                  </div>
                  <h3
                    // onClick={() => setIsOpen(true)}
                    className="text-lg font-medium dark:text-white duration-300 transition cursor-pointer mt-3 pr-4 hover:text-[#FA5252] dark:hover:text-[#FA5252]"
                  >
                    How to learn React ?
                  </h3>
                </div>
              </div>
            </div>
            {/* Blog items End */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
