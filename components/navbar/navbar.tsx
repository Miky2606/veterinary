import Image from "next/image";
import { IItemsLink } from "./interface";
import { MdLocalPharmacy } from "react-icons/md";
import Link from "next/link";
import { IoHome } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";
import { MdContacts } from "react-icons/md";

export const Navbar = ({ color }: { color: string }): JSX.Element => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 sticky w-full top-0  h-16">
      <Image
        src={"/img/logo.png"}
        alt="Logo"
        width={120}
        height={140}
        className="   h-14  md:w-36 "
      />

      <ItemsNav color={color} />
    </nav>
  );
};

const ItemsNav = ({ color }: { color: string }) => {
  return (
    <ul className={`${color}  text-blue_navy  gap-5  flex p-2`}>
      <li>
        <Items Icon={IoHome} text="home" url="#home" />
      </li>
      <li>
        <Items Icon={FcAbout} text="about us" url="#about" />
      </li>
      <li>
        <Items Icon={MdContacts} text="contact" url="#contact" />
      </li>
      <li>
        <Items
          Icon={MdLocalPharmacy}
          text="pharmacy"
          url="https://fiddlesticksvet.vetsfirstchoice.com/"
          target={"_blank"}
        />
      </li>
    </ul>
  );
};

const Items = ({ Icon, text, url, target }: IItemsLink): JSX.Element => {
  return (
    <Link href={url} className={` hover:text-blue_navy  `} target={target}>
      <div className="flex items-center  gap-1 capitalize flex-col lg:flex-row">
        <Icon />
        <span className="lg:block text-xs md:text-sm">{text}</span>
      </div>
    </Link>
  );
};
