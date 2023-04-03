import React from "react";
import { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Avatar,
  FormControl,
  InputRightElement,
  Text,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const generateRandomCode = () => {
  return Math.floor(1000 + Math.random() * 9000);
};

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [randomCode, setRandomCode] = useState(generateRandomCode());
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();
  const [authenticated, setAuthenticate] = useState(false);
  const navigate = useNavigate();

  const NavigateToHomePage = () => {
    navigate("/");
  };

  const handleShowClick = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === randomCode.toString()) {
      setAuthenticate(true);
      alert("You are good to go");
      onclick = { NavigateToHomePage };
      // <NavigateToHomePage/>

      setSubmitted(true);
    } else {
      alert("Enter Correct code");
      setError(true);
    }
  };

  // console.log(authenticated);

  const handleClickOTP = () => {
    setRandomCode(generateRandomCode());
    setIsOpen(true);
    setSubmitted(false);
    setError(false);
  };

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="teal.500" />
        <Heading color="teal.400">Welcome</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          {submitted ? (
            <NavigateToHomePage />
          ) : (
            <form onSubmit={handleSubmit}>
              <Stack
                spacing={4}
                p="1rem"
                backgroundColor="white"
                boxShadow="md"
              >
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      children={<CFaUserAlt color="gray.300" />}
                    />
                    <Input
                      type={"email" || "number"}
                      placeholder="email or Mobile Number"
                      onChange={(event) => setEmail(event.target?.value)}
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClickOTP}>
                        {"Send"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      color="gray.300"
                      children={<CFaLock color="gray.300" />}
                    />
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                        {showPassword ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Button
                  borderRadius={0}
                  type="submit"
                  variant="solid"
                  colorScheme="teal"
                  width="full"
                  // onClick={(event) => handleSubmit(event)}
                >
                  Login
                </Button>
              </Stack>
            </form>
          )}
          <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
          >
            <AlertDialogOverlay />
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Login Pin
              </AlertDialogHeader>

              <AlertDialogBody>
                Your Login pin is<strong>{randomCode}</strong>. Please enter this
                code to authenticate.
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button onClick={onClose}>Close</Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </Box>
      </Stack>
    </Flex>
  );
}

export default Login;
