import React from "react";
import {
  useToast,
  Flex,
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { useAuth } from "../utils/auth";
import Auth from "../components/Auth";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";


const Signup = () => {
  const auth = useAuth();
     const { colorMode } = useColorMode();
  const toast = useToast();
  const router = useRouter();
const { handleSubmit, register, errors } = useForm();

 const handleSignup=(data)=>{
     console.log(data.email)

  auth
    .signup(data.email, data.password)
    .then(() => {
      toast({
        title: "Success! 🍻",
        description: "Your account has been created.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      router.push("/");
    })
    .catch((error) => {
      toast({
        title: "An error occurred.",
        description: error.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    });
}
  return (
    <>
      <Flex align="center" justify="center" h="100vh">
        <form
          as="form"
          backgroundColor={[
            "none",
            colorMode === "light" ? "gray.100" : "gray.900",
          ]}
          borderRadius={8}
          errors={errors}
          maxWidth="400px"
          onSubmit={handleSubmit((data) => handleSignup(data))}
          px={8}
          py={12}
          register={register}
          shadow={[null, "md"]}
          spacing={3}
          
          w="100%"
        
        >
          <Stack>
            <Box as="a" href="/" aria-label="hasura, Back to homepage"></Box>

            <FormControl>
              <FormLabel>Email Address</FormLabel>
              <input {...register("email", { required: true })} />
              <FormErrorMessage>
                {" "}
                {errors && <span>This field is required</span>}
              </FormErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <input {...register("password", { required: true })} />
              <FormErrorMessage> </FormErrorMessage>
            </FormControl>
            <Button type="submit" mt={4} variantColor="teal" variant="solid">
              signup
            </Button>
          </Stack>
        </form>
      </Flex>
    </>
  );
};

export default Signup;
