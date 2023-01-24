import { Section } from "../section/section";
import { TextCustom } from "../text_custom/text_custom";
import { FaUserInjured } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IInput } from "./interface";
import { Buttons } from "../buttons/buttons";

export const Contact = (): JSX.Element => {
  return (
    <Section className="h-full bg-primary">
      <div className="flex flex-col justify-center items-center h-full px-9 ">
        <TextCustom
          className="p-4 md:text-6xl text-3xl mt-2"
          text="Contact Us"
        />

        <div className="flex flex-col lg:flex-row md:justify-center  items-center  md:px-6  w-full justify-center  md:w-3/4  md:h-3/4 h-full">
          <Form />
          <hr className="hidden bg-white lg:block h-1/2 border-[0.2px] ml-6 mr-6" />
          <Info />
        </div>
      </div>
    </Section>
  );
};

const Form = (): JSX.Element => {
  return (
    <form className="p-2 space-y-5  flex justify-center flex-col items-center w-1/2 ">
      <h4 className="text-white">Reach out to us for your pets needs</h4>
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
      />

      <TextTarea />

      <Buttons text="Submit" />
    </form>
  );
};

const InputField = ({ name, placeholder, Icon, type }: IInput): JSX.Element => {
  return (
    <div className="border-[0.5px] w-72 md:w-96 rounded flex items-center text-white justify-between  space-x-3 px-1">
      <Icon className=" border-r-[0.5px] rounded-r-none h-full w-10 -ml-1 p-2  rounded " />
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="bg-primary  rounded border-none focus:border-none  outline-none w-full py-2 px-1 text-white text-sm"
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
    ></textarea>
  );
};

const Info = (): JSX.Element => {
  return (
    <div className="w-1/2 flex flex-col gap-4">
      <h4 className="text-white">Call today to schedule an appointment</h4>
      <p className="text-gray-400">
        We are a new Veterinary Hospital that is located in the Fiddlesticks
        Publix Plaza on Daniels Pkwy near I-75.{" "}
      </p>
      <h4 className="text-white">Fiddlesticks Veterinary Hospital</h4>
      <p className="text-gray-400">
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
    </div>
  );
};
