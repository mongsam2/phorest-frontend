import { Button } from "@chakra-ui/react";
import { HeaderInterface } from "./interfaces";

export default function SignUpBtn({ white }: HeaderInterface) {
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
