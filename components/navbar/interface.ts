import { HTMLAttributeAnchorTarget } from "react";
import { IconType } from "react-icons";

export interface IItemsLink {
  text?: string;
  Icon: IconType;
  url: string;
  color?: string;
  target?: HTMLAttributeAnchorTarget | undefined;
}
