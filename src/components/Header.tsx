import {
  Flex,
  HStack,
  Heading,
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  TabIndicator,
} from "@chakra-ui/react";
import phorestIconBlack from "../assets/icons/header/phorest_black.svg";
import phorestIconWhite from "../assets/icons/header/phorest_white.svg";
import search_white from "../assets/icons/header/search_white.svg";
import search_black from "../assets/icons/header/search_black.svg";
import star_white from "../assets/icons/header/star_white.svg";
import star_black from "../assets/icons/header/star_black.svg";
import store_white from "../assets/icons/header/store_white.svg";
import store_black from "../assets/icons/header/store_black.svg";
import notification_white from "../assets/icons/header/notification_white.svg";
import notification_black from "../assets/icons/header/notification_black.svg";

interface HeaderInterface {
  white: boolean;
}

export default function Header({ white }: HeaderInterface) {
  return (
    <Flex
      height={"100px"}
      width={"100vw"}
      padding={"30px 50px"}
      justifyContent={"space-between"}
    >
      <HStack spacing={"41px"} color={white ? "white" : "black"}>
        <img src={white ? phorestIconWhite : phorestIconBlack}></img>
        <Tabs variant="unstyled" colorScheme={"blackAlpha"}>
          <TabList>
            <Tab>
              <Heading size={"sm"}>사진</Heading>
            </Tab>
            <Tab>
              <Heading size={"sm"}>일러스트</Heading>
            </Tab>
          </TabList>
          <TabIndicator
            mt="-1.5px"
            height="2px"
            bg={white ? "white" : "black"}
            borderRadius="1px"
          />
        </Tabs>
      </HStack>

      <HStack spacing={"32px"}>
        <Button backgroundColor={"transparent"}>
          <img src={white ? search_white : search_black} width={"32px"}></img>
        </Button>
        <Button backgroundColor={"transparent"}>
          <img src={white ? star_white : star_black} width={"30px"}></img>
        </Button>
        <Button backgroundColor={"transparent"}>
          <img src={white ? store_white : store_black} width={"30px"}></img>
        </Button>
        <Button backgroundColor={"transparent"}>
          <img
            src={white ? notification_white : notification_black}
            width={"30px"}
          ></img>
        </Button>
        <Button
          _hover={
            white
              ? { bg: "white", color: "black" }
              : { bg: "black", color: "white" }
          }
          borderRadius={"50"}
          variant={"outline"}
          border={white ? "1px solid white" : "1px solid black"}
          color={white ? "white" : "black"}
        >
          갤러리 업로드
        </Button>
      </HStack>
    </Flex>
  );
}
