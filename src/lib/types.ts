import { ReactNode } from "react";

export interface INavbarElement {
  type: "single"
  key: string;
  name: string;
  icon?: ReactNode;
}

export interface INavbarDropdown {
  type: "dropdown"
  key: string;
  name: string;
  elements: INavbarElement[]
}

export type NavbarElement = INavbarElement | INavbarDropdown;