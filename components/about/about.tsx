import { Buttons } from "../buttons/buttons";
import { Section } from "../section/section";
import { TextCustom } from "../text_custom/text_custom";

export const About = (): JSX.Element => {
  return (
    <>
      <Section
        className="  md:1/2 lg:h-3/4 text-white bg-secondary p-5 top-6  px-9"
        id="about"
      >
        <div className="flex justify-center gap-10 items-center flex-col h-full  ">
          <TextCustom className="text-3xl md:text-6xl mt-3" text="About Us" />
          <div className="w-full md:w-1/2 ">
            <p className="text-gray-500  text-lg md:text-2xl  break-words ">
              {" "}
              Fiddlesticks Veterinary Hospital is a full service animal
              hospital, serving Fort Myers, Florida. We offer routine medical
              wellness, surgery and dental care. Dr. Lisa Cooper DVM and Dr.
              Brian Theiss DVM have been serving Southwest Florida for over 25
              years. We are dedicated to providing the highest level of care for
              your furry family members. Contact us today for more information
              and to schedule an appointment.
            </p>
          </div>

          <Buttons text="Link" />
        </div>
      </Section>
    </>
  );
};
