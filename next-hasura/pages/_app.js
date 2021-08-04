import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react";
import { ProvideAuth } from "../utils/auth";

function MyApp({ Component, pageProps }) {
  return (

      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
  
  );
}

export default MyApp
