import { Buttons } from "../buttons/buttons";
import { Section } from "../section/section";
import { TextCustom } from "../text_custom/text_custom";

export const About = (): JSX.Element => {
  return (
    <>
      <Section className="  md:h-1/2 text-white bg-secondary p-5 " id="about">
        <div className="flex justify-between items-center flex-col h-full gap-5">
          <TextCustom className="text-3xl md:text-6xl " text="About Us" />
          <div className="w-full md:w-1/2 ">
            <p className="text-gray-500  text-lg md:text-2xl  break-words ">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              nostrum enim velit similique veniam quas. Ab laudantium distinctio
              dolores tempore accusantium eligendi, assumenda commodi, ut modi,
              sequi hic necessitatibus autem.
            </p>
          </div>

          <Buttons text="Link" />
        </div>
      </Section>
    </>
  );
};
