import { Buttons, ButtonsItems } from "../buttons/buttons";

export const Navbar = (): JSX.Element => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 sticky w-full top-0 h-16">
      <div>Logo</div>
      <ItemsNav />
    </nav>
  );
};

const ItemsNav = () => {
  return (
    <ul className="flex gap-4">
      <li>
        <a href="">
          <ButtonsItems text="Items" />
        </a>
      </li>
      <li>
        <a href="">
          <ButtonsItems text="Items" />
        </a>
      </li>
      <li>
        <a href="">
          <ButtonsItems text="Items" />
        </a>
      </li>
      <li>
        <a href="">
          <ButtonsItems text="Items" />
        </a>
      </li>
    </ul>
  );
};
