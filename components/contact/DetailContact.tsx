import React from "react";
import {
  FaEnvelopeOpenText,
  FaMapMarkerAlt,
  FaMobileAlt,
} from "react-icons/fa";

import { IContact } from "../../types";

type Props = {
  contact: IContact;
};

const DetailContact = ({ contact: { phone, email, address } }: Props) => {
  return (
    <div className="w-full lg:w-[50%] xl:w-[40%] space-y-6">
      {/* Begin Phone */}
      <div className="flex flex-row flex-nowrap dark:bg-transparent p-[30px] bg-[#FFE5E5] dark:bg-[#212425] border-[#A6A6A6] gap-2 rounded-xl ">
        <span className="w-8 mt-1">
          <span className="text-4xl text-oriange ">
            <FaMobileAlt />
          </span>
        </span>
        <div className="space-y-2">
          <p className="text-xl font-semibold dark:text-white">Phone :</p>
          <p className="text-gray-lite text-lg dark:text-[#A6A6A6] ">{phone}</p>
        </div>
      </div>
      {/* End Phone */}

      {/* Begin Email */}
      <div className="flex flex-row flex-nowrap dark:bg-transparent p-[30px] bg-[#EEFBFF] dark:bg-[#212425] border-[#A6A6A6] gap-2 rounded-xl ">
        <span className="w-8 mt-1">
          <span className="text-4xl text-green">
            <FaEnvelopeOpenText />
          </span>
        </span>
        <div className="space-y-2">
          <p className="text-xl font-semibold dark:text-white">Email :</p>
          <p className="text-gray-lite text-lg dark:text-[#A6A6A6] ">{email}</p>
        </div>
      </div>
      {/* End Email */}

      {/* Begin Address */}
      <div className="flex flex-row flex-nowrap dark:bg-transparent p-[30px] bg-[#FAEFFD] dark:bg-[#212425] border-[#A6A6A6] gap-2 rounded-xl ">
        <span className="w-8 mt-1">
          <span className="text-4xl text-oriange-lite">
            <FaMapMarkerAlt />
          </span>
        </span>
        <div className="space-y-2">
          <p className="text-xl font-semibold dark:text-white">Address :</p>
          <p className="text-gray-lite text-lg dark:text-[#A6A6A6] ">
            {address}
          </p>
        </div>
      </div>
      {/* End Address */}
    </div>
  );
};

export default DetailContact;
