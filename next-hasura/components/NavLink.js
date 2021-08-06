import { Box, PseudoBox, useColorMode } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { cloneElement, forwardRef } from "react";

const NavLink = ({ children, ...props }) => {
  const router = useRouter();
  let isActive = false;

  if (router.pathname === props.href) {
    isActive = true;
  }

  return (
    <NextLink passHref {...props}>
      {typeof children === "function" ? children(isActive) : children}
    </NextLink>
  );
};



export default NavLink