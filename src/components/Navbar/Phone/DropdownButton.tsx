import React, { useState } from "react";
import { INavbarDropdown } from "../../../lib/types";
import { ChevronUp, ChevronDown } from "lucide-react";

interface IDropdownButtonProps {
  dropdownElement: INavbarDropdown;
}

const DropdownButton = ({ dropdownElement }: IDropdownButtonProps) => {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const handleButtonClick = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="h-fit w-full">
      <button
        className="w-full p-4 text-lg font-medium text-left flex items-center gap-1"
        onClick={handleButtonClick}
      >
        <span>{isToggled ? <ChevronDown /> : <ChevronUp />}</span>
        {dropdownElement.name}
      </button>
      {isToggled && (
        <div className="flex flex-col h-fit w-full divide-y">
          {dropdownElement.elements.map((element) => (
            <button className="text-left text-lg py-2 px-4 bg-gray-100 hover:bg-gray-200 transition-colors flex gap-1 items-center">
              {element.icon && <span>{element.icon}</span>}
              <span className="truncate">{element.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
