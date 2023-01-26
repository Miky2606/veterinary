import Link from "next/link";
import { FC } from "react";
import { MapView } from "../map/map";
import { IItemsLink } from "../navbar/interface";
import { BsFacebook } from "react-icons/bs";
import { FaYelp } from "react-icons/fa";

export const Footer = (): JSX.Element => {
  return (
    <footer className="  w-full h-4/6   flex flex-col bg-secondary  shadow-blue_navy shadow-lg p-4 items-center">
      <MapView />

      <div className="flex p-5 gap-5">
        <Links
          Icon={BsFacebook}
          url="https://www.facebook.com/fiddlesticksvh/"
          color="hover:text-blue-500"
        />
        <Links
          Icon={FaYelp}
          url="https://www.yelp.com/biz/fiddlesticks-veterinary-hospital-fort-myers"
          color="hover:text-red-600 "
        />
      </div>

      <div className=" flex justify-center ">
        <p className="m-auto text-gray-400 text-xs">
          Copyright © {new Date().getFullYear()} Fiddlesticks Veterinarian - All
          Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

const Links: FC<IItemsLink> = ({ Icon, url, color }): JSX.Element => {
  return (
    <Link
      href={url}
      target="_blank"
      className={`${color} text-2xl  text-gray-400 hover:scale-110 transition-all ease-linear`}
    >
      <Icon />
    </Link>
  );
};
