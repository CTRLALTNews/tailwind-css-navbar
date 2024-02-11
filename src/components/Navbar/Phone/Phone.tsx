import React, { ReactNode, useState } from "react";
import { INavbarProps } from "../Navbar";
import { Menu, X } from "lucide-react";
import DropdownButton from "./DropdownButton";

interface IPhoneProps extends INavbarProps {
  leftSideIcon: ReactNode;
}

const Phone = ({ elements, leftSideIcon }: IPhoneProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative h-full w-full ">
      <div className="w-full h-full flex items-center sm:hidden px-4">
        <div className="w-1/12 h-full flex items-center justify-start">
          {leftSideIcon}
        </div>
        <div className="w-11/12 h-full flex items-center justify-end">
          <button onClick={handleButtonClick}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="absolute h-[calc(100vh-4rem)] right-0 w-full max-w-96 bg-white border-l border-t sm:hidden divide-y">
          {elements.map((element) => {
            if (element.type == "dropdown")
              return <DropdownButton dropdownElement={element} />;

            if (element.type == "single")
              return (
                <button className="w-full p-4 text-lg font-medium text-left flex items-center gap-1 hover:bg-gray-200 transition-colors">
                  {element.icon && <span>{element.icon}</span>}

                  {element.name}
                </button>
              );
          })}
        </div>
      )}
    </div>
  );
};

export default Phone;
