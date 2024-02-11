import { NavbarElement } from "../../lib/types";
import Desktop from "./Desktop/Desktop";
import Phone from "./Phone/Phone";
import { Brush } from "lucide-react";

export interface INavbarProps {
  elements: NavbarElement[];
}

const Navbar = ({ elements }: INavbarProps) => {
  return (
    <div className="w-full h-16 border-b bg-white">
      <Desktop elements={elements} leftSideIcon={<Brush size={32} />}/>
      <Phone elements={elements} leftSideIcon={<Brush/>}/>
    </div>
  );
};

export default Navbar;
