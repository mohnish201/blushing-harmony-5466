import React from "react";
import ButtonComponent from "../components/ButtonComponent";
import doctor_2edited from "../Images/doctor_2edited.png";
import service from "../Images/service.png";
import { MdImportantDevices } from "react-icons/md";
import { TiTime } from "react-icons/ti";
import { FaRegHandshake } from "react-icons/fa";
import "../Pages/Home.css";
import doctor_3 from "../Images/doctor_3.png";
import doctor_4 from "../Images/doctor_4.png";
import { RiCheckboxCircleFill } from "react-icons/ri";
import {
  Grid,
  GridItem,
  Box,
  Heading,
  Text,
  VStack,
  Image,
  Spacer,
  Center,
  HStack,
  Checkbox,
  Card,
  CardBody,
} from "@chakra-ui/react";

function Home() {
  return (
    <Box>
      <Box
        w="80%"
        display={{ base: null, sm: null, md: "flex", lg: "flex", xl: "flex" }}
        border={"2px solid black"}
        m={"auto"}
        mt={"20px"}
        justifyContent={{
          sm: "space-around",
          md: "space-around",
          lg: "space-around",
          xl: "space-around",
        }}
        p={{ sm: null, md: "20px", lg: "20px", xl: "20px" }}
      >
        <VStack
          spacing={"60px"}
          border={"2px solid black"}
          w={{ md: "600px", lg: "600px", xl: "600px" }}
          p={"25px"}
          textAlign={"left"}
          alignItems={"left"}
        >
          <Heading
            as="h2"
            size={{ base: "xl", sm: "2xl", md: "2xl", lg: "2xl", xl: "3xl" }}
          >
            We help patients live a healthy, longer life.
          </Heading>
          <Text fontSize={"20px"}>
            We value your time so we set up all your accounts billing and costs
            through one payment that we take out of the box
          </Text>

          <ButtonComponent text="Make Appointment" />
        </VStack>

        <Center>
          <Box
            // border={"2px solid black"}
            w={{ sm: "200px", md: "300px", lg: "300px", xl: "300px" }}
            borderRadius={"150px"}
            style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
            boxSizing="borderBox"
          >
            <Image
              src={doctor_2edited}
              alt="doctor-1"
              w={"100%"}
              backgroundColor={"orange"}
              borderRadius={"150px"}
              p={"20px 20px 0px 20px"}
            />
          </Box>
        </Center>
      </Box>

      <Center mt={"30px"}>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(1, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(3, 1fr)",
            xl: "repeat(3, 1fr)",
          }}
          gap={6}
          width={"80%"}
        >
          <GridItem
            style={{
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
            }}
            p={"30px"}
            backgroundColor={"#c4eef6"}
            borderRadius={"20px"}
          >
            <Center>
              <HStack>
                <MdImportantDevices size={"80px"} />
                <Heading as="h3" size={"md"}>
                  Specialised Service
                </Heading>
              </HStack>
            </Center>
            <Text textAlign={"left"}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem pariatur nam perspiciatis, illo at consequatur.
            </Text>
          </GridItem>

          <GridItem
            style={{
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
            }}
            p={"30px"}
            backgroundColor={"#c4eef6"}
            borderRadius={"20px"}
          >
            <Center>
              <HStack>
                <TiTime size={"80px"} />
                <Heading as="h3" size={"md"}>
                  24/7 Proper Care
                </Heading>
              </HStack>
            </Center>
            <Text textAlign={"left"}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem pariatur nam perspiciatis, illo at consequatur.
            </Text>
          </GridItem>

          <GridItem
            style={{
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
            }}
            p={"30px"}
            backgroundColor={"#c4eef6"}
            borderRadius={"20px"}
          >
            <Center>
              <HStack>
                <FaRegHandshake size={"80px"} />
                <Heading as="h3" size={"md"}>
                  Get Result Online
                </Heading>
              </HStack>
            </Center>
            <Text textAlign={"left"}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem pariatur nam perspiciatis, illo at consequatur.
            </Text>
          </GridItem>
        </Grid>
      </Center>

      <Box
        w="80%"
        display={{ base: null, sm: null, md: "flex", lg: "flex", xl: "flex" }}
        border={"2px solid black"}
        m={"auto"}
        mt={"20px"}
        justifyContent={{
          sm: "space-around",
          md: "space-around",
          lg: "space-around",
          xl: "space-around",
        }}
        p={{ sm: null, md: "20px", lg: "20px", xl: "20px" }}
      >
        <Center>
          <Box
            borderTopRadius={"150px"}
            w={{ sm: "200px", md: "320px", lg: "320px", xl: "320px" }}
            style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
            boxSizing="borderBox"
          >
            <Image
              src={doctor_3}
              alt="doctor_3"
              backgroundColor={"dodgerblue"}
              borderTopRadius={"150px"}
              w={"100%"}
              p={"20px 20px 0px 20px"}
              boxSizing="borderBox"
            />
          </Box>
        </Center>

        <VStack
          spacing={"60px"}
          border={"2px solid black"}
          w={{ md: "600px", lg: "600px", xl: "600px" }}
          p={"25px"}
          textAlign={"left"}
          alignItems={"left"}
        >
          <Heading
            as="h2"
            size={{ base: "xl", sm: "2xl", md: "3xl", lg: "3xl", xl: "3xl" }}
          >
            Affordable Health Care Solutions
          </Heading>
          <Text fontSize={"20px"}>
            We value your time so we set up all your accounts billing and costs
            through one payment that we take out of the box
          </Text>

          <VStack alignItems={"left"} fontWeight={"bold"}>
            <HStack>
              <RiCheckboxCircleFill color="dodgerblue" size={"30px"} />{" "}
              <span>450+ Happy Pateints</span>
            </HStack>

            <HStack>
              <RiCheckboxCircleFill color="dodgerblue" size={"30px"} />
              <span>450+ Happy Pateints</span>
            </HStack>

            <HStack>
              <RiCheckboxCircleFill color="dodgerblue" size={"30px"} />
              <span>450+ Happy Pateints</span>
            </HStack>
          </VStack>
        </VStack>
      </Box>

      <Box
        w="80%"
        display={{ base: null, sm: null, md: "flex", lg: "flex", xl: "flex" }}
        border={"2px solid black"}
        m={"auto"}
        mt={"20px"}
        justifyContent={{
          sm: "space-around",
          md: "space-around",
          lg: "space-around",
          xl: "space-around",
        }}
        p={{ sm: null, md: "20px", lg: "20px", xl: "20px" }}
      >
        <VStack
          spacing={"60px"}
          border={"2px solid black"}
          w={{ md: "600px", lg: "600px", xl: "600px" }}
          p={"25px"}
          textAlign={"left"}
          alignItems={"left"}
        >
          <Heading
            as="h2"
            size={{ base: "xl", sm: "2xl", md: "2xl", lg: "2xl", xl: "3xl" }}
          >
            Trust Your Health with the best Specialists
          </Heading>
          <Text fontSize={"20px"}>
            We value your time so we set up all your accounts billing and costs
            through one payment that we take out of the box
          </Text>

          <ButtonComponent text="Learn More" />
        </VStack>

        <Center>
          <Box
            // border={"2px solid black"}
            w={{ sm: "200px", md: "350px", lg: "350px", xl: "350px" }}
            borderTopRadius={"150px"}
            style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
            boxSizing="borderBox"
          >
            <Image
              src={doctor_4}
              alt="doctor-4"
              w={"100%"}
              backgroundColor={"orange"}
              borderTopRadius={"150px"}
              p={"20px 20px 0px 20px"}
            />
          </Box>
        </Center>
      </Box>

      <Center>
        <Box>
          <Heading as="h2" size={"2xl"}>
            Our Dedicated Doctors
          </Heading>
          <Grid    templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
            lg: "repeat(4, 1fr)",
            xl: "repeat(4, 1fr)",
          }}
          gap={6}
          width={"80%"}>
            <GridItem>
              <Card>
                <CardBody>
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3MZxwFKT1IqMYmExLIxHJTy5mGkYNaSkdzw&usqp=CAU"
                    alt="img-1"
                  />
                </CardBody>
              </Card>
            </GridItem>
            <GridItem>
            <Card>
                <CardBody>
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3MZxwFKT1IqMYmExLIxHJTy5mGkYNaSkdzw&usqp=CAU"
                    alt="img-1"
                  />
                </CardBody>
              </Card>
            </GridItem>
            <GridItem>
            <Card>
                <CardBody>
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3MZxwFKT1IqMYmExLIxHJTy5mGkYNaSkdzw&usqp=CAU"
                    alt="img-1"
                  />
                </CardBody>
              </Card>
            </GridItem>
            <GridItem>
            <Card>
                <CardBody>
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3MZxwFKT1IqMYmExLIxHJTy5mGkYNaSkdzw&usqp=CAU"
                    alt="img-1"
                  />
                </CardBody>
              </Card>
            </GridItem>
           
          </Grid>
        </Box>
      </Center>
    </Box>
  );
}

export default Home;