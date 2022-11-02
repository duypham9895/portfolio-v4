import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaSkype } from "react-icons/fa";
import { SiZalo } from "react-icons/si";

import HeadTitle from "../components/UI/HeadTitle";
import { client } from "../graphql";
import { TITLE_SOCIAL } from "../types/enum";
import {
  HomepageDocument,
  HomepageQuery,
  HomepageQueryVariables,
} from "../types/generated";

type Social = { [title: string]: string };
type Props = {
  fullName: string;
  title: string;
  social: Social;
};

const Home = ({ fullName, title, social }: Props) => {
  return (
    <>
      <HeadTitle title="Home" />

      <div
        className="flex flex-col items-center h-[100vh] md:h-[90vh] lg:h-[80vh] xl:h-[71vh] justify-center"
        data-aos="fade"
      >
        {/* Avatar Info Start */}
        <Image
          className="rounded-full w-[250px] h-[250px] 2xl:w-[280px] 2xl:h-[280px] mx-auto object-cover"
          src="/images/about/avatar.jpg"
          alt="my-avatar"
          width="250"
          height="250"
        />
        <h3 className="mt-6 mb-1 text-5xl font-semibold dark:text-white">
          {fullName}
        </h3>
        <p className="mb-4 text-[#505050] dark:text-[#808080]">{title}</p>
        {/* Avatar Info End */}

        {/* Social information start */}
        <div className="flex space-x-3">
          <Link href={`${social[TITLE_SOCIAL.LINKEDIN]}`} passHref>
            <a target="_blank" rel="noopener noreferrer">
              <span className="socialbtn text-[#0072b1]">
                <FaLinkedinIn />
              </span>
            </a>
          </Link>
          <Link href={`${social[TITLE_SOCIAL.GITHUB]}`} passHref>
            <a target="_blank" rel="noopener noreferrer">
              <span className="socialbtn text-[#000] dark:text-[#cdd9e5] dark:hover:text-white">
                <FaGithub />
              </span>
            </a>
          </Link>
          <Link href={`${social[TITLE_SOCIAL.SKYPE]}`} passHref>
            <a target="_blank" rel="noopener noreferrer">
              <span className="socialbtn text-[#00aff0]">
                <FaSkype />
              </span>
            </a>
          </Link>
          <Link href={`${social[TITLE_SOCIAL.ZALO]}`} passHref>
            <a target="_blank" rel="noopener noreferrer">
              <span className="socialbtn text-[#0068FF]">
                <SiZalo />
              </span>
            </a>
          </Link>
        </div>
        {/* Social information start */}

        {/* View button start */}
        <button className="flex items-center bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l px-8 py-3 text-lg text-white rounded-[35px] mt-6">
          <Link href={`${social[TITLE_SOCIAL.RESUME]}`} passHref>
            <a target="_blank" rel="noopener noreferrer">
              View my Resume
            </a>
          </Link>
        </button>
        {/* View button End */}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const { data } = await client.query<HomepageQuery, HomepageQueryVariables>({
    query: HomepageDocument,
  });

  // Extract & Transform data
  const personal = data.personal?.data?.attributes;
  const { full_name: fullName, title } = personal || {};

  const social: Social = {};
  personal?.socials?.data.forEach(({ attributes }) => {
    const { title, url } = attributes || {};
    if (!title || !url) {
      return;
    }
    social[title] = url;
  });

  return {
    props: {
      fullName,
      title,
      social,
    },
  };
}

export default Home;
