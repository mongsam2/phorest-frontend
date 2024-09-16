import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Input,
  FormControl,
  FormLabel,
  InputRightElement,
  InputGroup,
  useDisclosure,
  Icon,
} from "@chakra-ui/react";
import { ViewOffIcon, ViewIcon } from "@chakra-ui/icons";
import { HeaderProp } from "./interfaces";
import phorest from "../assets/icons/header/phorest_black.svg";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

export default function LoginBtn({ white }: HeaderProp) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <div>
      <Button
        _hover={
          white
            ? { bg: "white", color: "black" }
            : { bg: "black", color: "white" }
        }
        borderRadius={"50"}
        variant={"outline"}
        color={white ? "white" : "black"}
        onClick={onOpen}
      >
        로그인
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size={"2xl"}>
        <ModalOverlay></ModalOverlay>
        <ModalContent alignItems={"center"}>
          <ModalHeader marginTop={"50px"}>
            <img src={phorest} width={"150px"}></img>
          </ModalHeader>
          <ModalHeader>로그인</ModalHeader>
          <ModalCloseButton size={"lg"}></ModalCloseButton>
          <FormControl padding={"50px 100px"}>
            <FormLabel fontWeight={"bold"}>이메일 주소</FormLabel>
            <Input type="email" marginBottom={"30px"} size={"lg"}></Input>
            <FormLabel fontWeight={"bold"}>비밀번호</FormLabel>
            <InputGroup alignItems={"center"}>
              <Input
                type={show ? "text" : "password"}
                marginBottom={"30px"}
                size={"lg"}
              ></Input>
              <InputRightElement>
                <Icon
                  as={show ? ViewIcon : ViewOffIcon}
                  onClick={handleClick}
                ></Icon>
              </InputRightElement>
            </InputGroup>
            <Button
              backgroundColor={"black"}
              color={"white"}
              width={"100%"}
              height={"55px"}
            >
              로그인
            </Button>
          </FormControl>
        </ModalContent>
      </Modal>
    </div>
  );
}
