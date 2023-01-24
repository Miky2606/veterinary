import { FC } from "react";
import { Navbar } from "../navbar/navbar";
import { ILayout } from "./interface";

export const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div className="h-full w-full scrollbar-thumb-rounded-full  scrollbar-thin scrollbar-thumb-blue_navy scrollbar-track-gray-100 rounded scroll-smooth">
      <Navbar />
      {children}
    </div>
  );
};
