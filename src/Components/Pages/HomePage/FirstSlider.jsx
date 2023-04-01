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
      <Box
        style={{
          width: "100%",
          marginBottom: "50px",
          overflow: "-moz-initial",
        }}
      >
        <Slider {...settings}>
          {/* <Grid justifyContent={"center"}> */}
          <Card maxW={"300px"}>
            <Image src="https://img.gkbcdn.com/p/2023-02-16/ANBERNIC-RG35XX-Handheld-Game-Console-64-128GB-Card-White-Transparent-519454-0._w280_p1_.jpg" />
            <Text>
              ANBERNIC RG35XX Handheld Game Console 3.5-inch IPS Full Screen
            </Text>
            <Text>€70.20</Text>
          </Card>
          {/* </Grid> */}
          <Card maxW={"300px"}>
            <Image src="https://img.gkbcdn.com/p/2023-03-25/HONGDUI-JF15-Kerfmaker-Table-Saw-Slot-Regulator-Large-519991-0._w280_p1_.jpg" />
            <Text>
              HONGDUI JF15 Kerfmaker Table Saw Slot Regulator, Mortise Tenon
              Tool
            </Text>
            <Text>€50.54</Text>
          </Card>
          <Card maxW={"300px"}>
            <Image src="https://img.gkbcdn.com/p/2023-03-23/DQ215-Portable-Neck-Hanging-Fan-Army-Green-519949-0._w280_p1_.jpg" />
            <Text>
              DQ215 Portable Neck Hanging Fan, 6000mAh Battery Waist-Mounted
            </Text>
            <Text>€20.58</Text>
          </Card>
          <Card maxW={"300px"}>
            <Image src="https://img.gkbcdn.com/p/2023-03-25/MINIX-SD4-GR-480GB-SSD-Dual-4K-60Hz-Output-Silver-519981-0._w280_p1_.jpg" />
            <Text>
              MINIX SD4 GR 480GB SSD Dual 4K@60Hz Output, USB3.0, PD - Data
            </Text>
            <Text>€70.20</Text>
          </Card>
          <Card maxW={"300px"}>
            <Image src="https://img.gkbcdn.com/p/2023-03-23/DQ223-Portable-Hanging-Neck-Fan-Green-519947-0._w280_p1_.jpg" />
            <Text>
              DQ223 Portable Neck Hanging Fan, 2000mAh Battery Waist-Mounted
            </Text>
            <Text>€14.03</Text>
          </Card>
          <Card maxW={"300px"}>
            <Image src="https://img.gkbcdn.com/p/2023-03-23/wltoys-k200-rc-helicopter-4ch-2-4g-remote-control-3-batteries-186e06-1679570564746._w280_p1_.jpg" />
            <Text>
              Wltoys K200 RC Helicopter 4CH 2.4G Remote Control Air Pressure
              Fixed
            </Text>
            <Text>€93.60</Text>
          </Card>
          <Card maxW={"300px"}>
            <Image src="https://img.gkbcdn.com/p/2023-02-22/MECOOL-KM7-Plus-TV-Box-Android-11-519535-0._w280_p1_.jpg" />
            <Text>
              MECOOL KM7 Plus TV Box Android 11 Amlogic S905Y4 Quad-Core A35,
            </Text>
            <Text>€68.33</Text>
          </Card>
          <Card maxW={"300px"}>
            <Image src="https://img.gkbcdn.com/p/2023-01-07/Teclast-T50-11---Tablet-8GB-RAM-128GB-ROM-Unisoc-T618-Octa-Core-519021-0._w280_p1_.jpg" />
            <Text>
              Teclast T50 11- Tablet 8GB RAM 128GB ROM Unisoc T616 Octa Core,
            </Text>
            <Text>€205.01</Text>
          </Card>
          <Card maxW={"300px"}>
            <Image src="https://img.gkbcdn.com/p/2023-03-24/X133-Plus-15-6-inch-Laptop-16GB-DDR4-256GB-SSD-519963-0._w280_p1_.jpg" />
            <Text>
              Meenhong X133 Plus Laptop - 15.6" 1920x1080 Display, Intel N5095
              CPU,
            </Text>
            <Text>€355.71</Text>
          </Card>
        </Slider>
      </Box>
    );
  }
}
