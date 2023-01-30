import { FC } from "react";
import { ISection } from "./interface";

export const Section: FC<ISection> = ({
  children,
  className,
  id,
}): JSX.Element => {
  return (
    <section className={`${className} w-full overflow-auto `} id={id}>
      {children}
    </section>
  );
};
