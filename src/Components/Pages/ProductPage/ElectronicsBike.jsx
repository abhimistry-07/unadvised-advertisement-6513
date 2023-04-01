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
} from "@chakra-ui/react";
import Navbar from "../HomePage/Navbar";
import React from "react";
import { useState, useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BsHeart } from "react-icons/bs";
import { BiCartAdd } from "react-icons/bi";

function ElectronicBikes() {
  const [data, setData] = useState([]);

  const [isLiked, setIsLiked] = useState([]);

  const [cart, setCart] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleFavBtnClick = (item) => {
    if (isLiked.includes(item)) {
      // console.log(item)
      setIsLiked(isLiked.filter((likedItem) => likedItem !== item));
    } else {
      setIsLiked([...isLiked, item]);
    }
  };

  const handleAddCart = (newItem) => {
    if (cart.includes(newItem)) {
      // if (cart.map((item) => item.id === newItem.id)) {

      alert("This item is already in your cart!");
    } else {
      setCart([...cart, newItem]);
      alert("Item Added to cart");
    }
  };

  console.log("cart>>>>>>>", cart);
  console.log("isLiked>>>>", isLiked);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/electricBikes`)
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Box>
      <Navbar onSearch={handleSearch} />
      <Flex>
        <Box className="functionalityPart" w={1000}></Box>
        <Box className="productPart" border="1px solid red" p={5}>
          <Grid templateColumns="repeat(3, 1fr)" gap={4}>
            {data.map((item) => {
              return (
                <Card className="card" p={5} key={item.id}>
                  <Image
                    className="cardImg"
                    src={item.image}
                    w={"80%"}
                    margin="auto"
                  ></Image>

                  <Text noOfLines={2} className="text" fontSize="sm">
                    <Image src="https://img.gkbcdn.com/s3/bn/2303/78x24-6412714d2b40c93290a1b4d7.gif" />{" "}
                    {item.title}
                  </Text>

                  <Text pt={5} pb={5}>
                    ₹ {item.price}
                  </Text>

                  <Flex justifyContent="space-between">
                    <Box
                      as={BsHeart}
                      size={25}
                      color={isLiked.includes(item) ? "red" : "black"}
                      fill={isLiked.includes(item) ? "red" : "black"}
                      onClick={() => handleFavBtnClick(item)}
                    ></Box>

                    <Box
                      as={BiCartAdd}
                      size={25}
                      onClick={() => handleAddCart(item)}
                    ></Box>
                  </Flex>
                </Card>
              );
            })}
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
}

export default ElectronicBikes;
