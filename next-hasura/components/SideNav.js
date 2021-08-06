import React from 'react'
import { useColorMode, Stack, Text, Box, Flex } from "@chakra-ui/react";
import AddItemModal from './AddItemModal';
import { ComponentLink } from "./NavLink";
import Items from "../icons/Items";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";



const PageLinks = () => (
  <Stack spacing={0} mb={8}>

  </Stack>
);
const SideNav = (props) => {
    const { colorMode } = useColorMode();
    return (
      <Box
        backgroundColor={colorMode === "light" ? "white" : "gray.800"}
        position="fixed"
        left="0"
        width="100%"
        height="100%"
        top="0"
        right="0"
        {...props}
      >
        <Box
          top="4rem"
          position="relative"
          overflowY="auto"
          borderRightWidth="1px"
        >
          <Box>
            <Flex
              justify="space-between"
              direction="column"
              height="calc(100vh - 4rem)"
              fontSize="sm"
              p="6"
            >
              <PageLinks />
             
              <AddItemModal />
            </Flex>
          </Box>
        </Box>
      </Box>
    );
}

export default SideNav
