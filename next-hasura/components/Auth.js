
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  useColorMode,

} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

import { useAuth } from "../utils/auth";

const AuthContent = ({ register, errors, type, ...rest }) => (
  <Stack {...rest}>
    <Box as="a" href="/" aria-label="daydrink, Back to homepage">
      logo
    </Box>
    <FormControl isInvalid={errors.email && errors.email.message}>
      <FormLabel>Email Address</FormLabel>
      <Input
        autoFocus
        aria-label="Email Address"
        name="email"
        ref={register({
          required: "Please enter your email.",
        })}
        placeholder="name@site.com"
      />
      <FormErrorMessage>
        {errors.email && errors.email.message}
      </FormErrorMessage>
    </FormControl>
    <FormControl isInvalid={errors.pass && errors.pass.message}>
      <FormLabel>Password</FormLabel>
      <Input
        aria-label="Password"
        name="pass"
        type="password"
        ref={register({
          required: "Please enter a password.",
        })}
      />
      <FormErrorMessage>{errors.pass && errors.pass.message}</FormErrorMessage>
    </FormControl>
    <Button type="submit" mt={4} variantColor="teal" variant="solid">
      {type}
    </Button>
  </Stack>
);

const FullScreenAuth = ({ type, onSubmit }) => {
  const { colorMode } = useColorMode();
  const { handleSubmit, register, errors } = useForm();

  return (
    <Flex align="center" justify="center" h="100vh">
      <AuthContent
        as="form"
        backgroundColor={[
          "none",
          colorMode === "light" ? "gray.100" : "gray.900",
        ]}
        borderRadius={8}
        errors={errors}
        maxWidth="400px"
        onSubmit={handleSubmit((data) => onSubmit(data))}
        px={8}
        py={12}
        register={register}
        shadow={[null, "md"]}
        spacing={3}
        type={type}
        w="100%"
      />
    </Flex>
  );
};




export default FullScreenAuth;
