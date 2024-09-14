import { Button } from "@chakra-ui/react";
import { HeaderInterface } from "./interfaces";

export default function LoginBtn({ white }: HeaderInterface) {
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
      >
        로그인
      </Button>
    </div>
  );
}
