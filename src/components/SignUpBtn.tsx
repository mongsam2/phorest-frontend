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
} from "@chakra-ui/react";
import { HeaderProp } from "./interfaces";
import phorest from "../assets/icons/header/phorest_black.svg";

export default function SignUpBtn({ white }: HeaderProp) {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
      >
        회원가입
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size={"2xl"}>
        <ModalOverlay></ModalOverlay>
        <ModalContent alignItems={"center"}>
          <ModalHeader marginTop={"50px"}>
            <img src={phorest} width={"150px"}></img>
          </ModalHeader>
          <ModalCloseButton size={"lg"}></ModalCloseButton>
          <FormControl padding={"50px 100px"}>
            <FormLabel fontWeight={"bold"}>이메일 주소</FormLabel>
            <Input type="email" marginBottom={"30px"} size={"lg"}></Input>
            <FormLabel fontWeight={"bold"}>사용자 이름</FormLabel>
            <InputGroup alignItems={"center"}>
              <Input type="password" marginBottom={"30px"} size={"lg"}></Input>
              <InputRightElement></InputRightElement>
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
