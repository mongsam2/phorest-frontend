import { Heading, VStack, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NotFound() {
    return <VStack bg={"beige"} justifyContent={"center"} minH={"100vh"} >
        <Heading>Page not found.</Heading>
        <Text>It seems that you're lost.</Text>
        <Link to={"/"}>
            <Button colorScheme="green">Go home</Button>
        </Link>
    </VStack>
}