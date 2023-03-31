import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Box,
  HStack,
  Text,
  Button,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";

import styles from "./homePage.module.css";

function LowerNavbar() {
  return (
    <Box bg="#06f" px={9} width={["100%"]}>
      <HStack>
        <Menu>
          <MenuButton
            className=""
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
            color="white"
            border={"0px"}
          />
          <MenuList>
            <MenuItem>Local Warehouses</MenuItem>
            <MenuItem>Sports & Outdoors</MenuItem>
            <MenuItem>Smart Home & Garden</MenuItem>
            <MenuItem>Consumer Electronics</MenuItem>
            <MenuItem>Generators & Poortable Power</MenuItem>
            <MenuItem>TV Boxes & Mini PCs</MenuItem>
            <MenuItem>Toys & Hobbies</MenuItem>
            <MenuItem>Phone Accessories</MenuItem>
            <MenuItem>Automobiles & Motorcycles</MenuItem>
            <MenuItem>Security Systems</MenuItem>
          </MenuList>
        </Menu>
        <Text color={"white"}>Categories</Text>
        <Box marginLeft={"10px"}>
          <HStack
            className={styles.navbar}
            as={"nav"}
            spacing={5}
            //   display={{ base: "none", md: "flex" }}
            //   id="myDIV"
          >
            <Button className="btnRes" colorScheme="#06f">
              <a href="#New">
                {" "}
                <b>New</b>
              </a>
            </Button>

            <Button className="btnRes" colorScheme="#06f">
              <a href="#Bestselling">
                <b>Bestselling</b>
              </a>
            </Button>

            <Button className="btnRes" colorScheme="#06f">
              <a href="#Brand">
                {" "}
                <b>Brand</b>
              </a>
            </Button>

            <Button className="btnRes" colorScheme="#06f">
              <a href="#Clearance">
                <b>Clearance</b>
              </a>
            </Button>

            <Button className="btnRes" colorScheme="#06f">
              <a href="#Deals">
                <b>Deals</b>
              </a>
            </Button>
            <Button className="btnRes" colorScheme="#06f">
              <a href="#Coupon">
                <b>Coupon</b>
              </a>
            </Button>
            <Button className="btnRes" colorScheme="#06f">
              <a href="#App Only">
                <b>App Only</b>
              </a>
            </Button>
            <Button className="btnRes" colorScheme="#06f">
              <a href="#WhatGeek">
                <b>WhatGeek</b>
              </a>
            </Button>
          </HStack>
        </Box>
      </HStack>
    </Box>
  );
}

export default LowerNavbar;
