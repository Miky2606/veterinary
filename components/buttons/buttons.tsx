import { IButton } from "./interface";

export const Buttons = ({ text, onClick }: IButton): JSX.Element => {
  return (
    <button
      className=" bg-gradient-to-r from-blue-400   to-blue_navy  text-white px-7 py-2 rounded-full  uppercase  text-xs"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
