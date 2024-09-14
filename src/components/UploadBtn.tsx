import { Button } from "@chakra-ui/react";
import { HeaderInterface } from "./interfaces";

export default function UploadBtn({ white }: HeaderInterface) {
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
        border={white ? "1px solid white" : "1px solid black"}
        color={white ? "white" : "black"}
      >
        갤러리 업로드
      </Button>
    </div>
  );
}
