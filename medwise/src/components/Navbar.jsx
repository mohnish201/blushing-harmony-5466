import React from "react";
import MedwiseLogo from "../Images/MedwiseLogo.png";
import loginIcon from "../Images/loginIcon.png";
import {
  Box,
  Flex,
  Image,
  VStack,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  IconButton,
  Spacer,
  Heading,
  Text,
  Avatar,
} from "@chakra-ui/react";
import { Link as ReachLink, NavLink, Link } from "react-router-dom";
import ButtonComponent from "./ButtonComponent";
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import { GrServices } from "react-icons/gr";
import { GiDoctorFace } from "react-icons/gi";
import { FaSignOutAlt } from "react-icons/fa";
import { HamburgerIcon } from "@chakra-ui/icons";
import { AuthContext } from "../AuthContextProvider/AuthContextProvider";
import { useContext, useEffect, useState } from "react";

const links = [
  { title: "Home", path: "/" },
  { title: "About Us", path: "/aboutus" },
  { title: "Services", path: "/services" },
  { title: "Find a Doctor", path: "/find_Doctor" },
];

const nonActive = {
  textDecoration: "none",
  color: "black",
};

const active = {
  color: "dodgerblue",
};

const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};
function Navbar() {
  const { auth, login, logout } = useContext(AuthContext);
  const [shouldElevate, setShouldElevate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setShouldElevate(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Flex
      align="center"
      justify="space-evenly"
      w={"100%"}
      bgColor={"white"}
      py={0}
      px={0}
      position="sticky"
      top={0}
      zIndex="sticky"
      transition="box-shadow 0.2s"
      boxShadow={shouldElevate ? "md" : "none"}
    >
      <Box
        w={{
          base: "120px",
          sm: "120px",
          md: "150px",
          lg: "190px",
          xl: "190px",
          "2xl": "190px",
        }}
      >
        <Link to="/">
          <Image src={MedwiseLogo} alt="medwise" w={"100%"} />
        </Link>
      </Box>

      <HStack
        w={"40%"}
        fontSize={{ base: "5px", sm: "10px", md: "15px", lg: "18px" }}
        display={{
          base: "none",
          sm: "none",
          md: "flex",
          lg: "flex",
          xl: "flex",
        }}
        justifyContent={"space-around"}
      >
        {links.map((el) => (
          <NavLink
            key={el.title}
            to={el.path}
            as={ReachLink}
            style={({ isActive }) => {
              return isActive ? active : nonActive;
            }}
          >
            {el.title}
          </NavLink>
        ))}
      </HStack>

      {auth.isAuth ? (
        <Menu>
          <MenuButton>
            <Avatar
              name={auth.username}
              bg="green"
              size={{ base: "sm", sm: "sm", md: "sm", lg: "md", xl: "md" }}
            />
          </MenuButton>

          <MenuList>
            <MenuItem>My Account</MenuItem>
            <MenuItem>Payments</MenuItem>
            <Link to="/login">
              <MenuItem onClick={logout}>
                Logout <Spacer /> <FaSignOutAlt />
              </MenuItem>
            </Link>
          </MenuList>
        </Menu>
      ) : (
        <Link to="/login">
          <ButtonComponent text="Login" />
        </Link>
      )}

      <Link to="/contact">
        <ButtonComponent text="Contact Us" />
      </Link>

      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
          display={{
            base: "block",
            sm: "block",
            md: "none",
            lg: "none",
            xl: "none",
          }}
        />

        <MenuList>
          <Link to="/">
            <MenuItem>
              Home <Spacer /> <AiFillHome />{" "}
            </MenuItem>
          </Link>

          <Link to="/aboutus">
            <MenuItem>
              About Us <Spacer /> <AiFillInfoCircle />
            </MenuItem>
          </Link>

          <Link to="/services">
            <MenuItem>
              Services <Spacer /> <GrServices />
            </MenuItem>
          </Link>

          <Link to="/find_doctor">
            <MenuItem>
              Find a Doctor <Spacer /> <GiDoctorFace />{" "}
            </MenuItem>
          </Link>

          <MenuItem onClick={logout}>
            Logout <Spacer /> <FaSignOutAlt />
          </MenuItem>
        </MenuList>
      </Menu>

      {/* <ButtonComponent rightIcon={<FaSignOutAlt />}  text="Logout"  />  */}
    </Flex>
  );
}

export default Navbar;
