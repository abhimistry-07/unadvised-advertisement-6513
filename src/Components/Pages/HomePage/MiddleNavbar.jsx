import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Show,
  HStack,
  Input,
  Text,
  useDisclosure,
  IconButton,
  Hide,
  Image,
} from "@chakra-ui/react";

import {
  MoonIcon,
  SunIcon,
  HamburgerIcon,
  CloseIcon,
  AddIcon,
  Search2Icon,
} from "@chakra-ui/icons";

function MiddleNavbar() {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box id="navFix">
      <Box bg="#06f" px={9} width={["100%"]}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack w="42%">
            <Image src="../Images/logo.png" />
            <Input
              placeholder="Search"
              width="auto"
              variant="outline"
              backgroundColor="white"
            ></Input>
            <Search2Icon
              color=""
              backgroundColor="white"
              size="20px"
              padding="0px"
              marginLeft="0px"
            />
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
}

export default MiddleNavbar;
