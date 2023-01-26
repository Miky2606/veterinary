import { Section } from "../section/section";
import { RxDoubleArrowDown } from "react-icons/rx";
import { TextCustom } from "../text_custom/text_custom";
import Link from "next/link";
export const Hero = (): JSX.Element => {
  return (
    <Section className=" bg-[url('/img/bg.png')] bg-no-repeat  bg-top lg:bg-[length:50%_47%]    bg-contain h-[90vh] mt-7 ">
      <div className="place-items-center grid h-full">
        <div
          className=" lg:mt-10 w-1/2 lg:w-1/3 h-1/2  p-7 flex  flex-col justify-between  text-center items-center "
          id="home"
        >
          <span className=" md:mt-10 "></span>
          <TextCustom
            className="md:mt-12 md:text-5xl text-2xl"
            text="Our animal hospital is ready to care for your pet today."
          />
          <IconsArrow />
        </div>
      </div>
    </Section>
  );
};

const IconsArrow = (): JSX.Element => {
  return (
    <div>
      <Link href="#about">
        <RxDoubleArrowDown className="mt-3  text-2xl md:mt-5 md:text-5xl delay-75 animate-bounce ease-out transition-all duration-100 text-blue_navy" />
      </Link>
    </div>
  );
};
