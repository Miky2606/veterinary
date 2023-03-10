import { Section } from "../section/section";
import { TextCustom } from "../text_custom/text_custom";
import { FaUserInjured } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IInput } from "./interface";
import { Buttons } from "../buttons/buttons";

import { FormEvent } from "react";

export const Contact = (): JSX.Element => {
  return (
    <Section
      className="h-[135%]  lg:h-full  bg-primary flex flex-col justify-center items-center  px-9 gap-4  "
      id="contact"
    >
      <TextCustom
        className="p-4 md:text-6xl text-3xl mt-6   "
        text="Contact Us"
      />

      <div className="flex flex-col lg:flex-row md:justify-center  items-center  md:px-6  w-full justify-center  md:w-3/4  md:h-3/4 h-full">
        <Form />
        <hr className="hidden bg-white lg:block h-1/2 border-[0.2px] ml-6 mr-6" />
        <Info />
      </div>
    </Section>
  );
};

const Form = (): JSX.Element => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form
      className="p-2 space-y-5  flex justify-center flex-col items-center w-full   lg:w-1/2"
      onSubmit={handleSubmit}
    >
      <h4 className="text-white text-sm">
        Reach out to us for your pets needs
      </h4>
      <InputField
        name="name"
        type="text"
        Icon={FaUserInjured}
        placeholder="Name"
      />
      <InputField
        name="email"
        type="email"
        Icon={MdEmail}
        placeholder="Email"
        required={true}
      />

      <TextTarea />

      <Buttons text="Submit" />
    </form>
  );
};

const InputField = ({
  name,
  placeholder,
  Icon,
  type,
  required,
}: IInput): JSX.Element => {
  return (
    <div className="border-[0.5px] w-72 md:w-96 rounded flex items-center text-white justify-between  space-x-3 px-1 ">
      <Icon className=" border-r-[0.5px] rounded-r-none h-full w-10 -ml-1 p-2  rounded " />
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="bg-primary  rounded border-none focus:border-none  outline-none w-full py-2 px-1 text-white text-sm "
        required={required}
        autoComplete={"off"}
      />
    </div>
  );
};

const TextTarea = (): JSX.Element => {
  return (
    <textarea
      name="description"
      id=""
      cols={55}
      rows={8}
      className="w-72 md:w-96 bg-primary border-[0.5px] outline-none rounded text-white p-2 text-sm"
      placeholder="Message"
      required
    ></textarea>
  );
};

const Info = (): JSX.Element => {
  return (
    <div className="w-full  lg:w-1/2 h-full flex flex-col gap-2 md:gap-4 mt-2 md:mt-6 justify-center ">
      <h4 className="text-white text-1xl md:text-2xl ">
        Call today to schedule an appointment
      </h4>
      <p className="text-gray-400">
        We are a new Veterinary Hospital that is located in the Fiddlesticks
        Publix Plaza on Daniels Pkwy near I-75.{" "}
      </p>
      <h4 className="text-white text-1x md:text-2xl">
        Fiddlesticks Veterinary Hospital
      </h4>
      <p className="text-gray-400 ">
        13650 Fiddle Sticks Blvd Ste 203 Fort Myers FL 33912
      </p>

      <div className="text-white flex flex-col">
        <div>
          <span className="text-gray-400">Number:</span>{" "}
          <a href="tel:2399228460">(239) 922-8460</a>
        </div>
        <div>
          <span className="text-gray-400">Email:</span>{" "}
          <a href="mailto:fiddlesticksvh@gmail.com">fiddlesticksvh@gmail.com</a>
        </div>
      </div>
      <h4 className="text-white text-1xl">Hours</h4>

      <p className=" text-white ">
        {" "}
        <span className="text-gray-400">Monday-Friday:</span> 8:00am - 5:00pm{" "}
      </p>
      <p className=" text-white ">
        <span className="text-gray-400 whitespace-normal">
          Saturday & Sunday:
        </span>{" "}
        Closed
      </p>
    </div>
  );
};
