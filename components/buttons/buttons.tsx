import { IButton } from "./interface";

export const Buttons = ({ text, onClick }: IButton): JSX.Element => {
  return (
    <button
      className=" bg-gradient-to-r from-blue-400   to-blue_navy  text-secondary px-7 py-2 rounded-full font-bold uppercase "
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export const ButtonsItems = ({ text, onClick }: IButton): JSX.Element => {
  return (
    <button
      className=" bg-gradient-to-r from-blue-400  via-blue-600 to-blue_navy  text-white text-xs px-4 py-1 rounded-full uppercase"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
