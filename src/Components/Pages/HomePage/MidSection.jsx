import { Box, Card, Center, Flex, Grid, Image, Text } from "@chakra-ui/react";

import styles from "./homePage.module.css";

import FirstSlider from "./FirstSlider";

function MidSection() {
  return (
    <Box className={styles.midSection}>
      <Box className="twoImages">
        <Flex justifyContent={"space-around"}>
          <Image src="https://content1.geekbuying.com/V1.4/en/images/indexV7/march_sale.jpg"></Image>
          <Image src="https://content1.geekbuying.com/V1.4/en/images/indexV7/march_coupon.jpg"></Image>
        </Flex>
      </Box>
      {/* <Box  width="85%"> */}
      <Grid
        className={styles.banner}
        // border={"1px solid red"}
        templateColumns="repeat(5, 1fr)"
        width="85%"
        margin={"auto"}
        marginTop={"25px"}
        marginBottom={"30px"}
      >
        <Card className={styles.card}>
          <Image
            width={"200px"}
            src="https://img.gkbcdn.com/s3/bn/2303/flashdeal-6422c7832b40c92c8cdf4394.gif"
          ></Image>
          <Text className={styles.imagetext}>Flash Deals</Text>
        </Card>
        <Card className={styles.card}>
          <Image
            width={"200px"}
            src="https://img.gkbcdn.com/s3/bn/2303/280x2802-641bb8b42b40c90ce8a704f7.jpg"
          ></Image>
          <Text className={styles.imagetext}>Smart Home & Garden</Text>
        </Card>
        <Card className={styles.card}>
          <Image
            width={"200px"}
            src="https://img.gkbcdn.com/s3/bn/2303/280x2803-641bb89e2b40c90ce8a704f6.jpg"
          ></Image>
          <Text className={styles.imagetext}>Consumer Electronics</Text>
        </Card>
        <Card className={styles.card}>
          <Image
            width={"200px"}
            src="https://img.gkbcdn.com/s3/bn/2303/280x280-641bb8c32b40c90ce8a704f8.jpg"
          ></Image>
          <Text className={styles.imagetext}>E-transport & Outdoor</Text>
        </Card>
        <Card className={styles.card}>
          <Image
            width={"200px"}
            src="https://img.gkbcdn.com/s3/bn/2303/luckydraw-6422c4e02b40c92c8cdf4392.gif"
          ></Image>
          <Text className={styles.imagetext}>Lucky Draw</Text>
        </Card>
      </Grid>
      {/* </Box> */}
      {/* <Box className="dealOfTheDay">
        <Grid>

        </Grid>
      </Box> */}

      <Box className="Trending Categories" marginBottom={"40px"}>
        <Text fontSize="3xl" as="b">
          Trending Categories
        </Text>
        <Grid
          //   className={styles.trendingCategoriesCards}
          gap={"5"}
          templateColumns="repeat(3, 1fr)"
          width="90%"
          //   border={"1px solid red"}
          margin="auto"
          marginTop={"5"}
        >
          <Card boxShadow="dark-lg" p="6" rounded="md" bg="white">
            <Image src="https://img.gkbcdn.com/bn/2303/412-641989e42b40c950645615a6._p1_.jpg"></Image>
            <Text fontSize="xl">3D Printers</Text>
            <Text fontSize="sm">
              3D printers allow you to bring digitally modeled designs to life
              by using highly detailed filament printing.
            </Text>
          </Card>
          <Card boxShadow="dark-lg" p="6" rounded="md" bg="white">
            <Image src="https://img.gkbcdn.com/bn/2303/12-641988d22b40c950645615a3._p1_.jpg"></Image>
            <Text fontSize="xl">Smart Home & Garden</Text>
            <Text fontSize="sm">
              Smart cleaning robots and vacuums, living room furniture, patio &
              garden supplies, up to 60% off!
            </Text>
          </Card>
          <Card boxShadow="dark-lg" p="6" rounded="md" bg="white">
            <Image src="https://img.gkbcdn.com/bn/2303/152-641988e42b40c950645615a4._p1_.jpg"></Image>
            <Text fontSize="xl">E-transport</Text>
            <Text fontSize="sm">
              New e-rides for less. Skip gas prices with electric bikes,
              scooters & beyond.
            </Text>
          </Card>
        </Grid>
      </Box>

      <Box className="1st slider">
        <Text fontSize="3xl" as="b">
          New For You
        </Text>
        <Box width={"100%"}>
            <FirstSlider/>
            </Box>
      </Box>

      <Box>
        <Text fontSize="3xl" as="b">
          Enjoy Life
        </Text>
        <Grid
          gap={"5"}
          templateColumns="repeat(3, 1fr)"
          width="90%"
          border={"1px solid red"}
          margin="auto"
          marginTop={"5"}
        >
          <Image src="https://img.gkbcdn.com/bn/2303/home-6422c9aa2b40c92c8c76431f._p1_.jpg" />
          <Box>
            <Card backgroundColor={"#f1f6fd"} padding="2" mb={"5"} className={styles.enjoyLifeCard}>
              <Text as={"b"} mt="0">Experience the fun of digital fabrication</Text>
              <Flex gap={"4"}>
                <Box>
                  <Image src="https://img.gkbcdn.com/bn/2301/2-63b3a2462b40c937987e3859._p1_.jpg" />
                  <Text backgroundColor={"#f1f6fd"} color="#06f">
                    3D Printers
                  </Text>
                </Box>
                <Box>
                  <Image src="https://img.gkbcdn.com/bn/2301/3-63b3a2aa2b40c937987e385a._p1_.jpg" />
                  <Text backgroundColor={"#f1f6fd"} color="#06f">
                    Laser engravers
                  </Text>
                </Box>
              </Flex>
            </Card>
            <Card backgroundColor={"#f1f6fd"} padding="4">
              <Text as={"b"}>Light up your life with tech-filled gear</Text>
              <Flex gap={"4"}>
                <Box>
                  <Image src="https://img.gkbcdn.com/bn/2303/camping-6422cc162b40c92c8c764326._p1_.jpg" />
                  <Text backgroundColor={"#f1f6fd"} color="#06f">
                  Portable power
                  </Text>
                </Box>
                <Box>
                  <Image src="https://img.gkbcdn.com/bn/2301/7-63b3a37c2b40c937987e385f._p1_.jpg" />
                  <Text backgroundColor={"#f1f6fd"} color="#06f">
                  Smart gadgets
                  </Text>
                </Box>
              </Flex>
            </Card>
          </Box>

        </Grid>
      </Box>
    </Box>
  );
}

export default MidSection;
