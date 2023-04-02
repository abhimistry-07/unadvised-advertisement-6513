import LowerNavbar from "./LowerNavbar";
import MiddleNavbar from "./MiddleNavbar";
import UpperNavBar from "./UpperNavbar";

function Navbar(props) {
  console.log(props);
  return (
    <nav>
      <UpperNavBar />
      <MiddleNavbar
        onChange={props?.onChange}
        searchQuery={props?.searchQuery}
        setSearchQuery={props?.setSearchQuery}
      />
      <LowerNavbar />
    </nav>
  );
}

export default Navbar;
