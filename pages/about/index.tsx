import React from "react";
import Image from "next/image";
import {
  FaEnvelopeOpenText,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaRegCalendarAlt,
} from "react-icons/fa";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import HeadTitle from "../../components/UI/HeadTitle";
import AboutCard from "../../components/UI/AboutCard";
import { IExperience } from "../../types";

type Props = {
  listExperience: IExperience[];
};

const About = ({ listExperience }: Props) => {
  return (
    <>
      <HeadTitle title="About" />
      {/* End pageTitle */}

      <section>
        <div className="container lg:rounded-2xl bg-white dark:bg-[#111111]  px-4 sm:px-5 md:px-10 lg:px-20">
          <div data-aos="fade">
            <div className="py-12">
              {/* Page Title */}
              <h2 className="after-effect after:left-52 mt-12 lg:mt-0 ">
                About Me
              </h2>
              <div className="grid grid-cols-12 md:gap-10 pt-4 md:pt-[40px] items-center">
                <div className="col-span-12 md:col-span-4">
                  {/* personal images for about page  */}
                  <Image
                    className="w-full md:w-[330px] md:h-[400px] object-cover overflow-hidden rounded-[35px] mb-3 md:mb-0"
                    src="/images/about/coldbrew.jpg"
                    alt="about-image"
                    width="330"
                    height="400"
                  />
                </div>
                <div className="col-span-12 md:col-span-8 space-y-2.5">
                  {/* About me information */}
                  <div className=" md:mr-12 xl:mr-16">
                    <h3 className="text-4xl font-medium dark:text-white mb-2.5 ">
                      Who Am I?
                    </h3>
                    <p className="text-gray-lite  dark:text-color-910 leading-7">
                      I&apos;m a Junior Software Engineer from Ho Chi Minh,
                      Vietnam, and used a JavaScript as a primary programming
                      language to develop a software
                    </p>
                    <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
                      My aim is to bring across your message and identity in the
                      most creative way. I created web design for many famous
                      brand companies.
                    </p>
                  </div>

                  {/* personal information */}
                  <div>
                    <h3 className="text-4xl font-medium my-5 dark:text-white">
                      Personal Info
                    </h3>
                    <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex">
                        <span className="text-oriange dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                          <FaMobileAlt />
                        </span>
                        <div className="space-y-1">
                          <p className="text-xs text-gray-lite dark:text-color-910">
                            Phone
                          </p>
                          <h6 className="font-medium dark:text-white">
                            +123 456 7890
                          </h6>
                        </div>
                      </div>
                      <div className="flex">
                        <span className="text-oriange-lite dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                          <FaMapMarkerAlt />
                        </span>
                        <div className="space-y-1">
                          <p className="text-xs text-gray-lite dark:text-color-910">
                            Location
                          </p>
                          <h6 className="font-medium dark:text-white">
                            Hong kong china
                          </h6>
                        </div>
                      </div>
                      <div className="flex">
                        <span className="text-green dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                          <FaEnvelopeOpenText />
                        </span>
                        <div className="space-y-1">
                          <p className="text-xs text-gray-lite dark:text-color-910">
                            Email
                          </p>
                          <h6 className="font-medium dark:text-white">
                            example@mail.com
                          </h6>
                        </div>
                      </div>
                      <div className="flex">
                        <span className="text-color-50 dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                          <FaRegCalendarAlt />
                        </span>
                        <div className="space-y-1">
                          <p className="text-xs text-gray-lite dark:text-color-910">
                            Birthday
                          </p>
                          <h6 className="font-medium dark:text-white">
                            May 27, 1990
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End personal information */}
                </div>
              </div>
            </div>

            <div className="  pb-12 ">
              <h3 className="text-[35px] dark:text-white font-medium pb-5">
                What I do!
              </h3>
              <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
                {/* Experience information  */}
                {listExperience.map((item) => (
                  <AboutCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export async function getStaticProps() {
  const listExperience: IExperience[] = [
    {
      id: "1",
      icon: "/images/icons/icon-1.svg",
      title: "Ui/Ux Design",
      des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
      color: "#D566FF",
      bg: "#FCF4FF",
    },
    {
      id: "2",
      icon: "/images/icons/icon-2.svg",
      title: "App Development",
      des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
      color: "#DDA10C",
      bg: "#FEFAF0",
    },
    {
      id: "3",
      icon: "/images/icons/icon-3.svg",
      title: "Photography",
      des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
      color: "#8774FF",
      bg: "#FCF4FF",
    },
    {
      id: "4",
      icon: "/images/icons/icon-4.svg",
      title: "Photography",
      des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
      color: "#FF6080",
      bg: "#FFF4F4",
    },
    {
      id: "5",
      icon: "/images/icons/icon-5.svg",
      title: "Managment",
      des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
      color: "#FF75D8",
      bg: "#FFF0F8",
    },
    {
      id: "6",
      icon: "/images/icons/icon-6.svg",
      title: "Web Development",
      des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
      color: "#269FFF",
      bg: "#F3FAFF",
    },
  ];
  return {
    props: {
      listExperience,
    },
  };
}

export default About;
