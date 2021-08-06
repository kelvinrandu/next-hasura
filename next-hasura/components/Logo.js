
import { useColorMode, Box } from "@chakra-ui/react";

const Logo = (props) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      as="svg"
      mt={1}
      viewBox="0 0 768 768"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill={colorMode === "light" ? "#2D3748" : "#F7FAFC"}
        d="M342.848 442.256c63.344-11.248 95.648 32.448 95.648 32.448 0.112 0.112 0.224 0.224 0.336 0.336 0.48 0.512 0.864 0.992 1.312 1.488 6.352 7.84 10.944 19.44 10.944 19.44l2.672 8.384 307.248-84.864-44-163.008-394 108 19.84 77.776z"
      />
    </Box>
  );
};

export default Logo;
