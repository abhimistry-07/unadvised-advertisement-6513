import LowerNavbar from "./LowerNavbar";
import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
import MidSection from "./MidSection";
import Footer from "./Footer";
import { useState } from "react";

function HomePage() {
  return (
    <Box>
      <Navbar />
      <MidSection />
      <Footer />
    </Box>
  );
}

export default HomePage;
