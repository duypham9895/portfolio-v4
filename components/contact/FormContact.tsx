import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  condition: boolean;
};

const FormContact = ({ condition }: Props) => {
  const form = useRef<HTMLFormElement>(null);
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");

  const changeNameHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setEnteredName(e.currentTarget.value);
  };
  const changeEmailHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setEnteredEmail(e.currentTarget.value);
  };
  const changeMessageHandler = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setEnteredMessage(e.currentTarget.value);
  };

  const resetFormInputs = () => {
    setEnteredName("");
    setEnteredEmail("");
    setEnteredMessage("");
  };

  // use Email js for receive message
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) {
      return;
    }

    const sentForm = await emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
      form.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
    );

    if (sentForm.status === 200) {
      toast.success("Message Sent successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      resetFormInputs();
    } else {
      toast.error("Ops Message not Sent!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <div
      data-aos="fade"
      className={`${
        condition
          ? "mx-4 md:mx-[60px] p-4 md:p-16 dark:border-[#4f4f4f] dark:border-2"
          : "  dark:border-[#4f4f4f] dark:border-2 mb-16  md:p-[48px]  p-4  "
      } bg-color-810 rounded-xl dark:bg-[#111111] mb-[30px] md:mb-[60px]`}
    >
      <h3 className="text-4xl  ">
        <span className="text-gray-lite dark:text-[#A6A6A6] ">
          I have got just what you need.
        </span>
        <br />
        <span className="font-semibold dark:text-white">Let&apos;s Talk.</span>
      </h3>

      {/* Form Start */}
      <form id="myForm" ref={form} onSubmit={sendEmail}>
        <div className="relative  z-0 w-full mt-[40px] mb-8 group">
          <input
            type="text"
            name="from_name"
            id="from_name"
            className="block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[s] peer"
            value={enteredName}
            onChange={changeNameHandler}
            required
          />
          <label
            htmlFor="from_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
          >
            Name *
          </label>
        </div>
        <div className="relative z-0 w-full mb-8 group">
          <input
            type="email"
            name="from_email"
            id="from_email"
            className="block autofill:text-red-900 needed py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#5185D4] peer"
            value={enteredEmail}
            onChange={changeEmailHandler}
            required
          />
          <label
            htmlFor="from_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#5185D4] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
          >
            Email *
          </label>
        </div>
        <div className="relative z-0 w-full mb-8 group">
          <textarea
            // type="text"
            rows={3}
            name="message"
            id="message"
            className="block autofill:bg-yellow-200 py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#CA56F2] peer"
            value={enteredMessage}
            onChange={changeMessageHandler}
            required
          />
          <label
            htmlFor="message"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#CA56F2] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
          >
            Message *
          </label>
        </div>

        <div className="transition-all duration-300  ease-in-out inline-block hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] rounded-lg  mt-3">
          <input
            type="submit"
            className=" transition ease-in duration-200 font-semibold cursor-pointer border-color-910   hover:border-transparent px-6  py-2 rounded-lg border-[2px]  hover:text-white   dark:text-white "
            value="Submit"
          />
        </div>

        {/* ToastContainer use here */}

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* Same as */}
        <ToastContainer />
      </form>

      {/* Form Start */}
    </div>
  );
};

export default FormContact;
