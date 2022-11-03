import React from "react";
import {
  FaEnvelopeOpenText,
  FaMapMarkerAlt,
  FaMobileAlt,
} from "react-icons/fa";
import { ContactEntity } from "../../types/generated";

type Props = {
  contact: ContactEntity;
};

const DetailContact = ({ contact }: Props) => {
  const {
    phone,
    email,
    address,
    address_url: addressUrl,
  } = contact.attributes || {};
  return (
    <div className="w-full lg:w-[50%] xl:w-[40%] space-y-6">
      {/* Begin Phone */}
      <div className="flex flex-row flex-nowrap dark:bg-transparent p-[30px] bg-[#FFE5E5] dark:bg-[#212425] border-[#A6A6A6] dark:border-[#4f4f4f] dark:border-2 gap-2 rounded-xl">
        <span className="w-8 mt-1">
          <span className="text-4xl text-oriange ">
            <FaMobileAlt />
          </span>
        </span>
        <div className="space-y-2">
          <p className="text-xl font-semibold dark:text-white">Phone :</p>
          <a
            className="text-gray-lite text-lg dark:text-[#A6A6A6] block"
            href={`tel:${phone}`}
          >
            {phone}
          </a>
        </div>
      </div>
      {/* End Phone */}

      {/* Begin Email */}
      <div className="flex flex-row flex-nowrap dark:bg-transparent p-[30px] bg-[#EEFBFF] dark:bg-[#212425] border-[#A6A6A6] dark:border-[#4f4f4f] dark:border-2 gap-2 rounded-xl">
        <span className="w-8 mt-1">
          <span className="text-4xl text-green">
            <FaEnvelopeOpenText />
          </span>
        </span>
        <div className="space-y-2">
          <p className="text-xl font-semibold dark:text-white">Email :</p>
          <a
            className="text-gray-lite text-lg dark:text-[#A6A6A6] block"
            href={`mailto:${email}`}
          >
            {email}
          </a>
        </div>
      </div>
      {/* End Email */}

      {/* Begin Address */}
      <div className="flex flex-row flex-nowrap dark:bg-transparent p-[30px] bg-[#FAEFFD] dark:bg-[#212425] border-[#A6A6A6] dark:border-[#4f4f4f] dark:border-2 gap-2 rounded-xl">
        <span className="w-8 mt-1">
          <span className="text-4xl text-oriange-lite">
            <FaMapMarkerAlt />
          </span>
        </span>
        <div className="space-y-2">
          <p className="text-xl font-semibold dark:text-white">Address :</p>
          <a
            className="text-gray-lite text-lg dark:text-[#A6A6A6] block"
            href={addressUrl as string}
            target="_blank"
            rel="noreferrer"
          >
            {address}
          </a>
        </div>
      </div>
      {/* End Address */}
    </div>
  );
};

export default DetailContact;
