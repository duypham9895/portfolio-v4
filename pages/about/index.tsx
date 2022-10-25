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
import format from "date-fns/format";

import HeadTitle from "../../components/UI/HeadTitle";
import { IAbout } from "../../types";

type Props = {
  about: IAbout;
};

const About = ({
  about: { phone, email, address, addressUrl, birthDate, introduction },
}: Props) => {
  const formattedBirth = format(new Date(birthDate), "MMM dd,yyyy");
  return (
    <>
      <HeadTitle title="About" />
      {/* End pageTitle */}

      <section>
        <div className="container lg:rounded-2xl bg-white dark:bg-[#151515] px-4 sm:px-5 md:px-10 lg:px-20">
          <div data-aos="fade">
            <div className="py-12">
              {/* Page Title */}
              <h2 className="after-effect after:left-52 mt-12 lg:mt-0">
                About Me
              </h2>
              <div className="grid grid-cols-12 md:gap-10 pt-4 md:pt-[40px] items-center">
                <div className="col-span-12 md:col-span-4 sm:mb-5">
                  {/* personal images for about page  */}
                  <Image
                    className="w-full md:w-[330px] md:h-[400px] object-cover overflow-hidden rounded-[35px] mb-3 md:mb-0"
                    src="/images/about/avatar.jpg"
                    alt="about-image"
                    width="330"
                    height="400"
                  />
                </div>
                <div className="col-span-12 md:col-span-8 space-y-3">
                  {/* About me information */}
                  <div className=" md:mr-12 xl:mr-16">
                    <h3 className="text-4xl font-medium dark:text-white mb-2.5 ">
                      Who Am I?
                    </h3>
                    <ul className="text-gray-lite dark:text-color-910 leading-7 space-y-3">
                      {introduction.map((content, i) => (
                        <li key={i}>{content}</li>
                      ))}
                    </ul>
                  </div>

                  {/* personal information */}
                  <div>
                    <h3 className="text-4xl font-medium my-5 dark:text-white">
                      Personal Info
                    </h3>
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                      <div className="flex">
                        <span className="text-oriange dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                          <FaMobileAlt />
                        </span>
                        <a className="space-y-1" href={`tel:${phone}`}>
                          <p className="text-xs text-gray-lite dark:text-color-910">
                            Phone
                          </p>
                          <h6 className="font-medium dark:text-white">
                            {phone}
                          </h6>
                        </a>
                      </div>
                      <div className="flex">
                        <span className="text-green dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                          <FaEnvelopeOpenText />
                        </span>
                        <a className="space-y-1" href={`mailto:${email}`}>
                          <p className="text-xs text-gray-lite dark:text-color-910">
                            Email
                          </p>
                          <h6 className="font-medium dark:text-white">
                            {email}
                          </h6>
                        </a>
                      </div>
                      <div className="flex">
                        <span className="text-oriange-lite dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                          <FaMapMarkerAlt />
                        </span>
                        <a
                          className="space-y-1"
                          href={addressUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <p className="text-xs text-gray-lite dark:text-color-910">
                            Location
                          </p>
                          <h6 className="font-medium dark:text-white">
                            {address}
                          </h6>
                        </a>
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
                            {formattedBirth}
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End personal information */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export async function getStaticProps() {
  const about: IAbout = {
    phone: "+84 963 769 049",
    email: "phamanhduy.sg@gmail.com",
    address: "Ho Chi Minh, Vietnam",
    addressUrl:
      "https://www.google.com/maps/search/?api=1&query=Ho%20Chi%20Minh%20City&query_place_id=ChIJ0T2NLikpdTERKxE8d61aX_E",
    birthDate: new Date("1999-10-18").toISOString(),
    introduction: [
      "I'm a Junior Software Engineer from Ho Chi Minh, Vietnam, and I used a JavaScript as a primary programming language to develop software.",
      "My purpose in becoming a software engineer is to solve a complex real-world issue with my technological knowledge.",
      "I am a coffee-lover, especially cold brew. And I am interested in setting up my desk at home and in the office. I believe it will affect my productivity, concentration, and performance.",
    ],
  };
  return {
    props: {
      about,
    },
  };
}

export default About;
