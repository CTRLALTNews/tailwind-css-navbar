import { useState } from "react";
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
    <div className="relative">
      <button
        className="p-2 rounded text-sm font-medium  flex gap-1 items-center"
        onClick={handleButtonClick}
      >
        <span>{isToggled ? <ChevronDown /> : <ChevronUp />}</span>
        <span>{dropdownElement.name}</span>
      </button>
      {isToggled && (
        <div className="w-fit max-w-56 h-fit bg-white absolute z-10 p-2 flex flex-col divide-y shadow border rounded">
          {dropdownElement.elements.map((element) => (
            <button className="p-2 text-left flex gap-2 items-center hover:bg-slate-100 transition-colors">
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
