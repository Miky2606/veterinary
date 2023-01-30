import { FC, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Footer } from "../footer/footer";
import { Navbar } from "../navbar/navbar";
import { ILayout } from "./interface";

export const Layout: FC<ILayout> = ({ children }) => {
  const getDate = () => {
    const hour = new Date().getHours() < 17 && new Date().getHours() >= 8;

    const date = new Date().getDay();
    if (date > 0 && date <= 5 && hour)
      return toast.success("We are open! 😍😍");
    return toast.error("Sorry we are  close!  😭😭 ");
  };

  useEffect(() => {
    getDate();
  }, []);

  return (
    <div className="h-full w-full scrollbar-thumb-rounded-full  scrollbar-thin scrollbar-thumb-blue_navy scrollbar-track-gray-100  scroll-smooth">
      <Navbar />

      {children}

      <Footer />
    </div>
  );
};
