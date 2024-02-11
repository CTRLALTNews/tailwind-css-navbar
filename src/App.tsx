import Navbar from "./components/Navbar/Navbar";
import { NavbarElement } from "./lib/types";
import { Brush, Phone	} from "lucide-react";

function App() {
  const navbarElements: NavbarElement[] = [
    {
      type: "single",
      key: "home",
      name: "Home",
    },
    {
      type: "dropdown",
      elements: [
        {
          type: "single",
          key: "art",
          name: "Art",
          icon: <Brush size={"16px"}/>
        },
        {
          type: "single",
          key: "prices",
          name: "Prices",
        }, {
          type: "single",
          key: "brushConference2024",
          name: "Brush Conference April 2024 aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        },
      ],
      key: "learnMore",
      name: "Learn More",
    },
    {
      type: "single",
      key: "contact",
      name: "Contact Us",
      icon: <Phone size={"16px"}/>
    },
   
  ];

  return (
    <div className="w-full h-screen bg-gray-900">
      <Navbar elements={navbarElements}/>
    </div>
  );
}

export default App;
