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
  Checkbox,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { HeaderProp } from "./interfaces";
import phorest from "../assets/icons/header/phorest_black.svg";

export default function SignUpBtn({ white }: HeaderProp) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <div>
      <Button
        _hover={
          white
            ? { bg: "black", color: "white" }
            : { bg: "white", color: "black" }
        }
        borderRadius={"50"}
        variant={"outline"}
        color={white ? "black" : "white"}
        bg={"black"}
        onClick={onOpen}
      >
        회원가입
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size={"2xl"}>
        <ModalOverlay></ModalOverlay>
        <ModalContent alignItems={"center"}>
          <ModalHeader marginTop={"50px"}>
            <img src={phorest} width={"150px"}></img>
          </ModalHeader>
          <ModalHeader>회원 정보 입력</ModalHeader>
          <ModalCloseButton size={"lg"}></ModalCloseButton>
          <FormControl padding={"50px 100px"}>
            <FormLabel fontWeight={"bold"}>이메일 주소</FormLabel>
            <Input type="email" marginBottom={"30px"} size={"lg"}></Input>
            <FormLabel fontWeight={"bold"}>사용자 이름</FormLabel>
            <Input type="text" marginBottom={"30px"} size={"lg"}></Input>
            <FormLabel fontWeight={"bold"}>비밀번호</FormLabel>
            <Input
              type={show ? "text" : "password"}
              marginBottom={"30px"}
              size={"lg"}
            ></Input>
            <FormLabel fontWeight={"bold"}>비밀번호 확인</FormLabel>
            <Input
              type={show ? "text" : "password"}
              marginBottom={"30px"}
              size={"lg"}
            ></Input>
            <Checkbox
              marginBottom={"30px"}
              fontWeight={"bold"}
              size="md"
              colorScheme="gray"
            >
              메일 및 문자 수신에 동의합니다.
            </Checkbox>
            <Button
              backgroundColor={"black"}
              color={"white"}
              width={"100%"}
              height={"55px"}
            >
              완료
            </Button>
          </FormControl>
        </ModalContent>
      </Modal>
    </div>
  );
}
