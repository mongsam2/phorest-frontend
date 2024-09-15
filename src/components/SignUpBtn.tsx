import { Button, useDisclosure } from "@chakra-ui/react";
import { HeaderProp, ModalBtnProp } from "./interfaces";

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
    </div>
  );
}
