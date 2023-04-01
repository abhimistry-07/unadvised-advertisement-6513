import {
  Box,
  Flex,
  HStack,
  Input,
  Text,
  Image,
  IconButton,
} from "@chakra-ui/react";

import { SearchIcon } from "@chakra-ui/icons";

import { VscAccount } from "react-icons/vsc";

import { MdShoppingCart } from "react-icons/md";

import { useState } from "react";

// import styles from "./HomePage.module.css"

function MiddleNavbar() {
  //   const { isOpen, onOpen, onClose } = useDisclosure();
  //   const { colorMode, toggleColorMode } = useColorMode();
  const [data, setData] = useState([]);
  const [inputVlaue, setInputValue] = useState("");

  console.log(inputVlaue);

  return (
    <Box id="navFix">
      <Box bg="#06f" px={9} width={["100%"]}>
        <Flex h={16} alignItems={"center"}>
          <Image src="images/logo.png" width="155px" />
          <HStack marginLeft="100px">
            <Flex
            // border={"1px solid red"}
            >
              <Input
                // className={styles.searchBar}
                minWidth="600px"
                placeholder="Search"
                // width="auto"
                variant="outline"
                backgroundColor="white"
                borderBottomEndRadius={"0px"}
                borderTopRightRadius={"0px"}
                onChange={(e) => setInputValue(e.target.value)}
              ></Input>

              <IconButton
                borderTopLeftRadius={"0px"}
                borderBottomStartRadius={"0px"}
                backgroundColor={"white"}
                aria-label="Search database"
                icon={<SearchIcon />}
              />
            </Flex>
          </HStack>
          <Flex
            marginLeft="100px"
            justifyContent="space-between"
            width={"800px"}
            textAlign="center"
            // border={"1px solid red"}
          >
            <Text color="white">Ship to</Text>
            <Image src="images/flag.png" width="35px" />

            <HStack marginLeft="15px">
              <VscAccount color="white" />
              <Text marginLeft="10px" color="white">
                Sign in
              </Text>
            </HStack>
            <MdShoppingCart color="white" />
            {/* </Flex> */}
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default MiddleNavbar;
