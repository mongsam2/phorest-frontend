import { Outlet } from "react-router-dom";
import { Box, HStack } from "@chakra-ui/react";
import phorestIcon from "../assets/icons/phorest_black.svg";
import Header from "./Header";

export default function Root() {
  return (
    <Box>
      <Header white={false}></Header>
      <Outlet></Outlet>
    </Box>
  );
}
