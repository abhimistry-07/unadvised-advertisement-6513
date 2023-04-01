import {
  Box,
  Text,
  Input,
  Stack,
  InputGroup,
  Button,
  Divider,
  Container,
  SimpleGrid,
  Link,
  Image,
  Heading,
} from "@chakra-ui/react";

import { ChatIcon, EmailIcon, CalendarIcon } from "@chakra-ui/icons";

function AllLinks() {
  return (
    <Box>
      <Container as={Stack} maxW={"7xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }} spacing={8}>
          <Stack align={"flex-start"}>
            <Heading as="h5" size="sm">
              Help
            </Heading>
            <Link href={"#"}>Order status</Link>
            <Link href={"#"}>About us</Link>
            <Link href={"#"}>Contact Us</Link>
            <Link href={"#"}>Warranty</Link>
            <Link href={"#"}>FAQs</Link>
            <Link href={"#"}>Sitemap</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <Heading as="h5" size="sm">
              Support
            </Heading>
            <Link href={"#"}>WhatGeek</Link>
            <Link href={"#"}>Shipping guide</Link>
            <Link href={"#"}>Payment information</Link>
            <Link href={"#"}>Wholesale</Link>
            <Link href={"#"}>Drop shipping</Link>
            <Link href={"#"}>Affiliates</Link>
            <Link href={"#"}>Blog</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <Heading as="h5" size="sm">
              Policies
            </Heading>
            <Link href={"#"}>Terms & conditions</Link>
            <Link href={"#"}>Return policy</Link>
            <Link href={"#"}>Privacy</Link>
            <Link href={"#"}>Declaration</Link>
            <Link href={"#"}>Customs</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <Heading as="h5" size="sm">
              Download The App
            </Heading>
            <Image src="https://content1.geekbuying.com/V1.4/en/images/index_images/app_store.jpg"></Image>
            <Image src="https://content1.geekbuying.com/V1.4/en/images/index_images/google_play.jpg"></Image>
            <Image src="https://content1.geekbuying.com/V1.4/en/images/index_images/gallery.jpg"></Image>
          </Stack>

          <Stack align="flex-start">
            <Heading as="h5" size="sm">
              Connect with us
            </Heading>
            <Link href={"#"}>
              <EmailIcon mr="2" /> service@geekbuying.com
            </Link>

            <Link href={"#"}>
              <CalendarIcon mr="2" />
              Ticket
            </Link>

            <Link href={"#"}>
              <ChatIcon mr="2" />
              Live Chat
            </Link>
          </Stack>

          {/* <Stack align="flex-start">
            <Heading as="h5" size="sm">
              Connect with us
            </Heading>
            <HStack></HStack>
          </Stack> */}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

function Footer() {
  return (
    <Box bg="#f1f6fd">
      <Box p="5">
        <Text as="b" color="#06f">
          Why buy from Geekbuying? +
        </Text>
      </Box>
      <Divider colorScheme="red" borderColor="#cad8ea" />

      <Box p="7">
        <Stack margin="auto">
          <InputGroup size="sm" width={"50%"} border="#06f" m="auto">
            <Input
              type="email"
              placeholder="Enter e-mail to get $60 off coupons"
              size="md"
            />
            <Button colorScheme="blue" borderRadius="0px" size="md">
              Subscribe
            </Button>
          </InputGroup>
        </Stack>
      </Box>

      <Divider colorScheme="red" borderColor="#cad8ea" />

      <Box>
        <AllLinks />
      </Box>
    </Box>
  );
}
export default Footer;
