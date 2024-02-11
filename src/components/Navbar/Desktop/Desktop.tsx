import { ReactNode } from "react";
import { INavbarProps } from "../Navbar";
import DropdownButton from "./DropdownButton";

interface IDesktopProps extends INavbarProps {
  leftSideIcon: ReactNode;
}

const Desktop = ({ elements, leftSideIcon }: IDesktopProps) => {
  return (
    <div className="w-full h-full hidden sm:flex flex-row">
      <div className="w-1/12 h-full  flex items-center justify-start pl-8">
        {leftSideIcon}
      </div>
      <div className="w-11/12 h-full pr-8 flex items-center justify-end gap-4">
        {elements.map((element) => {
          if (element.type == "dropdown")
            return <DropdownButton dropdownElement={element} />;

          if (element.type == "single")
            return (
              <button className="p-2 rounded text-sm font-medium flex gap-1 items-center border-b border-b-transparent hover:border-gray-200 ">
                {element.icon && <span>{element.icon}</span>}
                <span>{element.name}</span>
              </button>
            );
        })}
      </div>
    </div>
  );
};

export default Desktop;
