import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react";
import { ProvideAuth } from "../utils/auth";
import { UserProvider } from "@auth0/nextjs-auth0";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </UserProvider>
  );
}

export default MyApp
