import { FC } from "react";
import { ITextCustom } from "./interface";

export const TextCustom = ({ className, text }: ITextCustom) => {
  return (
    <h2
      className={`  bg-gradient-to-r  from-blue-400  via-blue-600 to-blue_navy text-transparent bg-clip-text font-extrabold break-word uppercase  whitespace-normal ${className}`}
    >
      {text}
    </h2>
  );
};
