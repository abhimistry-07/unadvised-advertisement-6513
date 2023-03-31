import UpperNavBar from "./UpperNavbar";
import MiddleNavbar from "./MiddleNavbar";
import LowerNavbar from "./LowerNavbar";
import MidSection from "./MidSection";

function HomePage() {
  return (
    <nav>
      <UpperNavBar />
      <MiddleNavbar />
      <LowerNavbar />
      <MidSection/>
    </nav>
  );
}

export default HomePage;
