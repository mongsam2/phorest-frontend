import { Outlet } from "react-router-dom";
import { Box, HStack } from "@chakra-ui/react";
import Header from "../components/Header";

export default function Root() {
  return (
    <Box>
      <Header white={false}></Header>
      <Outlet></Outlet>
    </Box>
  );
}
