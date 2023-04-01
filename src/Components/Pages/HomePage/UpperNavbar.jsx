import {
  Box,
  Flex,
  Text,
  Icon,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Grid,
} from "@chakra-ui/react";

import { ChevronDownIcon, ChatIcon, PhoneIcon } from "@chakra-ui/icons";
import { useState } from "react";
import {
  BsTicketDetailed,
  BsQuestionCircle,
  BsPhoneFill,
} from "react-icons/bs";

function UpperNavBar() {
  // const [language, setLanguage] = useState(false);
  // const [support, setSupport] = useState(false);
  // const [downloadApp, setDownloadApp] = useState(false);
  //   const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box className="head_top" bg="#06f" width={"100%"}>
      <Flex ml="800px">
        <Menu
          // isOpen={downloadApp}
          as={Button}
          //   onClose={() => setDownloadApp(false)}
        >
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            colorScheme="#06f"
            // onMouseEnter={() => setDownloadApp(true)}
            // onMouseLeave={() => setDownloadApp(false)}
          >
            <Flex>
              <BsPhoneFill />
              <Text marginLeft="5px">Save $50 with App</Text>
            </Flex>
          </MenuButton>
          <MenuList>
            <Card maxW="300px">
              <Text>
                Download app to get up to 70% off app-only deals and coupons
                worth $50
              </Text>
              <Grid
                templateColumns="repeat(2, 1fr)"

                // direction={{ base: "column", sm: "row" }}
                // overflow="hidden"
                // variant="outline"
              >
                <Image src="https://content1.geekbuying.com/V1.4/en/images/index_images/android_app.png" />
                <Box>
                  <Image
                    p="1"
                    src="https://content1.geekbuying.com/V1.4/en/images/index_images/app_store.jpg"
                  />
                  <Image
                    p="1"
                    src="https://content1.geekbuying.com/V1.4/en/images/index_images/google_play.jpg"
                  />
                  <Image
                    p="1"
                    src="https://content1.geekbuying.com/V1.4/en/images/index_images/gallery.jpg"
                  />
                </Box>
              </Grid>
              <Text>Go to mobile site</Text>
            </Card>
          </MenuList>
        </Menu>
        <Menu
          // isOpen={language}
          //   isOpen={isOpen}
          as={Button}
          //   onClose={() => setLanguage(false)}
          //   onMouseEnter={() => setLanguage(true)}
          //   onMouseLeave={() => setLanguage(false)}
        >
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            colorScheme="#06f"
            // onMouseEnter={onOpen}
            // onMouseLeave={onClose}
          >
            English
          </MenuButton>
          <MenuList
            minWidth="100px"
            // onMouseEnter={onOpen}
            // onMouseLeave={onClose}
          >
            <MenuItem>English</MenuItem>
            <MenuItem>Italiano</MenuItem>
            <MenuItem>Deutsch</MenuItem>
            <MenuItem>Español</MenuItem>
            <MenuItem>Français</MenuItem>
            <MenuItem>Português</MenuItem>
            <MenuItem>Slovenčina</MenuItem>
            <MenuItem>Magyar</MenuItem>
            <MenuItem>Slovenščina</MenuItem>
            <MenuItem>Lietuvių kalba</MenuItem>
            <MenuItem>Svenska</MenuItem>
            <MenuItem>Ελληνικά</MenuItem>
            <MenuItem>Dansk</MenuItem>
            <MenuItem>עברית</MenuItem>
            <MenuItem>Hrvatski jezik</MenuItem>
            <MenuItem>Polskie</MenuItem>
            <MenuItem> Limba română</MenuItem>
            <MenuItem>Čeština</MenuItem>
            <MenuItem>日本語</MenuItem>
          </MenuList>
        </Menu>
        <Menu
        //   isOpen={isOpen}
        // isOpen={support}
        >
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            colorScheme="#06f"
            // onMouseEnter={() => setSupport(true)}
            // onMouseLeave={() => setSupport(false)}
            // onMouseEnter={onOpen}
            // onMouseLeave={onClose}
          >
            Support Center
          </MenuButton>
          <MenuList
            minWidth="100px"
            // onMouseEnter={onOpen}
            // onMouseLeave={onClose}
          >
            <MenuItem minH="48px">
              <ChatIcon mr="12px" />
              <span>Live Chat</span>
            </MenuItem>
            <MenuItem minH="40px">
              <BsTicketDetailed mr="12px" />
              <Text mr="12px">Ticket</Text>
            </MenuItem>
            <MenuItem>
              <BsQuestionCircle mr="12px" />
              Help Center
            </MenuItem>
            <MenuItem>
              <PhoneIcon mr="12px" />
              Call Us
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
}

export default UpperNavBar;
