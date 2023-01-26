import { FC, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Footer } from "../footer/footer";
import { Navbar } from "../navbar/navbar";
import { ILayout } from "./interface";

export const Layout: FC<ILayout> = ({ children }) => {
  const [color, setColor] = useState<string>("lg:text-black");
  //

  const handleScroll = (event: any) => {
    const { scrollHeight, scrollTop, clientHeight } = event.target;
    const scroll = scrollHeight - scrollTop - clientHeight;

    if (scroll < 1300) {
      setColor("lg:text-white");
    } else {
      setColor("lg:text-black");
    }
  };

  const getDate = () => {
    const date = new Date().getDay();
    if (date > 0 && date <= 5) return toast.success("We are open today! 😍😍");
    return toast.error("Sorry we close today! 😭😭 ");
  };

  useEffect(() => {
    return () => {
      getDate();
      console.log("yes");
    };
  }, []);

  return (
    <div
      className="h-full w-full scrollbar-thumb-rounded-full  scrollbar-thin scrollbar-thumb-blue_navy scrollbar-track-gray-100  scroll-smooth"
      onScroll={handleScroll}
    >
      <Navbar color={color} />

      {children}

      <Footer />
    </div>
  );
};
