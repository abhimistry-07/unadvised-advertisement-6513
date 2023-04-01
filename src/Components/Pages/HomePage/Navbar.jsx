import LowerNavbar from "./LowerNavbar";
import MiddleNavbar from "./MiddleNavbar";
import UpperNavBar from "./UpperNavbar";

function Navbar() {
  return (
    <nav>
      <UpperNavBar />
      <MiddleNavbar />
      <LowerNavbar />
    </nav>
  );
}

export default Navbar;
