import {
  Box,
  Card,
  Container,
  Grid,
  Image,
  Text,
  Flex,
  Icon,
  chakra,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Select,
  Stack,
  HStack,
  Button,VStack
} from "@chakra-ui/react";
import React from "react";
import { useState, useEffect, useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import styles from "./cartPage.module.css";

import Navbar from "../HomePage/Navbar";

function CartPage(props) {
  
  // const [totalItems, setTotalItems] = useState(0);
  let totalItems = 0;
  const [cartData, setCartData] = useState([]);
  let [price, setTotalPrice] = useState(0);

  const handleIncrement = (id) => {
    setCartData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setCartData((prevData) =>
      prevData.map((item) =>
        item.id === id && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item
      )
    );
  };

  const handleDelete = (id) => {
    setCartData((prevData) => prevData.filter((item) => item.id !== id));
    totalItems--;
  };

  useEffect(() => {
    axios
      .get(`https://electroweb-api.onrender.com/allData`)
      .then((res) => {
        setCartData(
          res.data.map((item) => ({
            ...item,
            count: 1,
          }))
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  for(let i=0 ; i<cartData.length ; i++){
    // setTotalItems(totalItems+1);
    totalItems++;
  }


  // const totalPrice = ()=>{

  // }

  return (
    <Box>
      <Navbar
      // cartData={cartData}
      />
      <Box>
        <Flex>
          <Card w={80}>
            <VStack>
              <Text fontSize='3xl' as={('b',"ins")}>Total Items</Text>
              <Text fontSize='3xl' as='b'>{totalItems}</Text>
              <Text fontSize='3xl' as={('b',"ins")}>Total Cart Price</Text>
              <Text fontSize='3xl' as='b'>1205411</Text>
            </VStack>

          </Card>
          <Box className="productPart" 
          // border="1px solid red" 
          p={5} width="80%">
            <Box gap={4}>
              {cartData?.map((item) => {
                return (
                  <Card
                    className="card"
                    p={5}
                    key={item.id}
                    m={4}
                    // border="1px solid red"
                  >
                    <Image
                      className="cardImg"
                      src={item.image}
                      w={"10%"}
                      margin="auto"
                    ></Image>

                    <Text className="text" fontSize="sm">
                      <Image src="https://img.gkbcdn.com/s3/bn/2303/78x24-6412714d2b40c93290a1b4d7.gif" />{" "}
                      {item.title}
                    </Text>

                    <Text pt={5} pb={5}>
                      ₹ {item.price}
                    </Text>

                    <HStack>
                      <Button onClick={() => handleIncrement(item.id)}>
                        +
                      </Button>
                      <Button>{item.count}</Button>
                      <Button
                        isDisabled={item.count === 1}
                        onClick={() => handleDecrement(item.id)}
                      >
                        -
                      </Button>
                      <Button
                        className={styles.deleteBtn}
                        colorScheme="red"
                        onClick={() => handleDelete(item.id)}
                        // border="1px solid red"
                      >
                        Remove
                      </Button>
                    </HStack>
                  </Card>
                );
              })}
            </Box>
          </Box>
        </Flex>
      </Box>

      <Box className="productSection"></Box>
    </Box>
  );
}

export default CartPage;
