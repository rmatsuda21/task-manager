import {
    Box,
    Heading,
    Text,
    useColorModeValue,
    VStack,
} from "@chakra-ui/react";

// Each category
// Created By: Reo Matsuda
function Category() {
    const bg = useColorModeValue("gray.200", "blue.800");

    return (
        <Box
            w={"100%"}
            h={"200px"}
            minH={"200px"}
            bg={bg}
            p={4}
            borderRadius={20}
        >
            <Heading>H</Heading>
        </Box>
    );
}

// Create a list of all categories within group
// Created By: Reo Matsuda
export function CategoryList({ group }) {
    return (
        <VStack pt={5} gap={3} flex={1} overflowY={"auto"}>
            {Array(10)
                .fill("")
                .map((_, i) => {
                    return <Category key={i} />;
                })}
        </VStack>
    );
}