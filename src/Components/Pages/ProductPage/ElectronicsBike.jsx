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
} from "@chakra-ui/react";
import Navbar from "../HomePage/Navbar";
import React from "react";
import { useState, useEffect, useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BsHeart } from "react-icons/bs";
import { BiCartAdd } from "react-icons/bi";
import { auto } from "@popperjs/core";

function ElectronicBikes() {
  const [data, setData] = useState([]);
  const [isLiked, setIsLiked] = useState([]);
  const [cart, setCart] = useState([]);
  const [ratedMotorPower, setRatedMotorPower] = useState(null);
  const [batteryCapacity, setBatteryCapacity] = useState(null);
  const [type, setType] = useState(null);
  const [speed, setSpeed] = useState(null);
  const [selected, setSelected] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (query) => {
    // console.log(query, "query>>>");
    setSearchQuery(query);
  };
  // console.log(searchQuery,"bikkkkkkkkkk>>>>>>>")
// console.log(cart)
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
      alert("This item is already in your cart!");
    } else {
      setCart([...cart, newItem]);
      alert("Item Added to cart");
    }
  };

  const filterAllDataOnFilterObjChanged = () => {
    // setData(data)
    const filteredItems = data.filter((item) => {
      if (
        ratedMotorPower === "250W-350W" &&
        item.power >= 250 &&
        item.power < 350
      ) {
        return true;
        // console.log(">>>Hiiiii");
      } else if (
        ratedMotorPower === "350W-500W" &&
        item.power >= 350 &&
        item.power < 500
      ) {
        return true;
      } else if (ratedMotorPower === ">500W" && item.power > 500) {
        return true;
      } else if (ratedMotorPower === null) {
        setSelected(false);
      }
      return false;
    });
    // console.log(data);
    // console.log("filteredItems", filteredItems);
    // console.log("ratedMotorPower", ratedMotorPower);
    setData(filteredItems);
    // return filteredItems;
  };

  // useEffect(() => {
  //   if (!selected) {
  //     axios
  //       .get(`http://localhost:8080/electricBikes`)
  //       .then((res) => {
  //         // console.log(res.data);
  //         setData(res.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   } else {
  //     filterAllDataOnFilterObjChanged()
  //     // let appliedFilter = filterAllDataOnFilterObjChanged(appliedFilterObj);
  //     // setData(appliedFilter);
  //     // setSelected(false)
  //     // filterAllDataOnFilterObjChanged(appliedFilterObj)
  //   }
  // }, [ratedMotorPower, batteryCapacity, type, speed, selected]);

  // console.log(data);

  useEffect(() => {
    if (searchQuery) {
      const fetchAndRenderData = setTimeout(() => {
        axios
          .get(`https://electroweb-api.onrender.com/electricBikes?q=${searchQuery}`)
          .then((res) => {
            setData(res.data);
            let filter = res.data.filter((item) => {
              return item.title
                .toLowerCase()
                .includes(searchQuery.toLowerCase());
            });
            setData(filter);
          });
      }, 1000);

      return () => clearTimeout(fetchAndRenderData);
    } else {
      axios
        .get(`https://electroweb-api.onrender.com/electricBikes`)
        .then((res) => {
          setData(res.data);
          // filterData();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [searchQuery]);

  return (
    <Box>
      <Navbar
        onChange={handleSearch}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        cartData={cart}
      />
      <Flex>
        <Box className="functionalityPart" w={800}>
          <Stack mt={5} spacing={3}>
            <Select
              variant="flushed"
              bg="#f1f6fd"
              placeholder="Motor Rated Power:"
              value={ratedMotorPower}
              onChange={(e) => {
                setRatedMotorPower(e.target.value);
                setSelected(true);
                // updateAppliedFilterObj("ratedMotorPower", e.target.value);
              }}
            >
              <option value="250W-350W">250W-350W</option>
              <option value="350W-500W">350W-500W</option>
              <option value=">500W">{">500W"}</option>
            </Select>
            <Select
              value=""
              variant="flushed"
              bg="#f1f6fd"
              placeholder="Battery Capacity:"
              onChange={(e) => setBatteryCapacity(e.target.value)}
            >
              <option value="10-15Ah">10-15Ah</option>
              <option value="15-20Ah">15-20Ah</option>
            </Select>
            <Select
              variant="flushed"
              bg="#f1f6fd"
              placeholder="Type:"
              value=""
              onChange={(e) => setType(e.target.value)}
            >
              <option value="E-Bikes">E-Bikes</option>
              <option value="Mountain Bike(MTB)">Mountain Bike(MTB)</option>
              <option value="Folding Bike">Folding Bike</option>
              <option value="Road">Road</option>
            </Select>
            <Select
              variant="flushed"
              bg="#f1f6fd"
              placeholder="Wheel Size:"
              value=""
              // onChange={(e)=>set(e.target.value)}
            >
              <option value="20">20"</option>
              <option value="26">26"</option>
              <option value="27.5">27.5"</option>
            </Select>
            <Select
              value=""
              variant="flushed"
              bg="#f1f6fd"
              placeholder="Top Speed:"
              onChange={(e) => setSpeed(e.target.value)}
            >
              <option value="25-35km/h">25-35km/h</option>
              <option value="35-45km/h">35-45km/h</option>
            </Select>
          </Stack>
          <Card mt={5} p={5}>
            <Link>Bikes</Link>
            <Link>E-Bikes Scooters & Wheels</Link>
            <Link>- Bikes</Link>
            <Link>- Electric Scooters</Link>
            <Link>- Electric Skateboards</Link>
            <Link>- Kick Scooters & More</Link>
            <Link>- Accessories</Link>
            <Link>Exercise</Link>
            <Link>Outdoor Sports Cameras</Link>
            <Link>Cycling</Link>
            <Link>Outdoor Recreation</Link>
            <Link>Camping & Hiking</Link>
            <Link>Glasses</Link>
            <Link>Flashlight & Torch</Link>
            <Link>Outdoor Apparels</Link>
            <Link>Athletics</Link>
            <Link>Hunting & Shooting</Link>
            <Link>Other Outdoor Gear</Link>
          </Card>
        </Box>

        <Box className="productPart" 
        // border="1px solid red" 
        width="300%"
        p={5}>
          <Grid templateColumns="repeat(3, 1fr)" gap={4}>
            {data?.map((item) => {
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
