import React from "react";
import DetailContact from "../../components/contact/DetailContact";
import FormContact from "../../components/contact/FormContact";

import HeadTitle from "../../components/UI/HeadTitle";
import { client } from "../../graphql";
import {
  ContactEntity,
  ContactsDocument,
  ContactsQuery,
  ContactsQueryVariables,
} from "../../types/generated";

type Props = {
  contact: ContactEntity;
};

const Contact = ({ contact }: Props) => {
  return (
    <>
      <HeadTitle title="Contact" />

      <section>
        <div className="container lg:rounded-2xl bg-white dark:bg-[#151515] px-4 sm:px-5 md:px-10 lg:px-20">
          <div data-aos="fade">
            <div className="py-12">
              {/* Page Title */}
              <h2 className="after-effect after:left-52 mt-12 lg:mt-0">
                Contact
              </h2>
              <div className="lg:flex gap-x-20 pt-4 md:pt-[40px]">
                <DetailContact contact={contact} />
                <div className="w-full mt-8 lg:mt-0 lg:w-[60%] xl:w-[70%]">
                  <FormContact />
                </div>
              </div>
            </div>
            {/* End contact */}
          </div>
        </div>
      </section>
    </>
  );
};

export async function getStaticProps() {
  const { data } = await client.query<ContactsQuery, ContactsQueryVariables>({
    query: ContactsDocument,
  });

  return {
    props: {
      contact: data.contacts?.data[0],
    },
  };
}

export default Contact;
