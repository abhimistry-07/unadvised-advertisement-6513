import { Box, Card, Grid, Image, Text } from "@chakra-ui/react";
import React, { Component } from "react";
import Slider from "react-slick";

export default class FirstSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    return (
      <Box style={{ width: "100%", marginBottom: "50px" }}>
        <Slider {...settings}>
          {/* <Grid justifyContent={"center"}> */}
            <Card maxW={"300px"} border="1px solid red">
              <Image src="https://img.gkbcdn.com/p/2023-02-16/ANBERNIC-RG35XX-Handheld-Game-Console-64-128GB-Card-White-Transparent-519454-0._w280_p1_.jpg" />
              <Text>
                ANBERNIC RG35XX Handheld Game Console 3.5-inch IPS Full Screen
              </Text>
              <Text>€70.20</Text>
            </Card>
          {/* </Grid> */}
          <Card maxW={"300px"} border="1px solid red">
              <Image src="https://img.gkbcdn.com/p/2023-02-16/ANBERNIC-RG35XX-Handheld-Game-Console-64-128GB-Card-White-Transparent-519454-0._w280_p1_.jpg" />
              <Text>
                ANBERNIC RG35XX Handheld Game Console 3.5-inch IPS Full Screen
              </Text>
              <Text>€70.20</Text>
            </Card>
            <Card maxW={"300px"} border="1px solid red">
              <Image src="https://img.gkbcdn.com/p/2023-02-16/ANBERNIC-RG35XX-Handheld-Game-Console-64-128GB-Card-White-Transparent-519454-0._w280_p1_.jpg" />
              <Text>
                ANBERNIC RG35XX Handheld Game Console 3.5-inch IPS Full Screen
              </Text>
              <Text>€70.20</Text>
            </Card>
          <Card>
            <Image src="https://img.gkbcdn.com/p/2023-03-10/Makerbase-MKS-DLC32-32-bits-Laser-Engraver-Control-Board-519784-0._w280_p1_.jpg" />
          </Card>
          <Card>
            <Image src="https://img.gkbcdn.com/p/2023-03-10/Makerbase-MKS-DLC32-32-bits-Laser-Engraver-Control-Board-519784-0._w280_p1_.jpg" />
          </Card>
        </Slider>
      </Box>
    );
  }
}
