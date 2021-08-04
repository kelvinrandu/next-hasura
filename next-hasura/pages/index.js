import Head from "next/head";
import { useItems } from "../graphql/hooks";
import { withApollo } from "../graphql/apollo";
import { Text, Flex, Spinner } from "@chakra-ui/react";
import App from "../components/App";

const Home = () => {
  const { data, loading } = useItems();

  const allItems = data ? data.items : [];
  return (
    <App width="full" maxWidth="1280px" mx="auto" px={6} py={6}>
      <Text mb={2} fontSize="sm">
        {"Active "}
        <b>{"Items"}</b>
      </Text>
      {loading ? (
        <Flex pt={24} align="center" justify="center">
          <Spinner size="xl" label="Loading items" />
        </Flex>
      ) : (
        <>
          {allItems.length ? (
            allItems.map((item) => <Text key={item.id}>{item.name}</Text>)
          ) : (
            <Text>no items</Text>
          )}
        </>
      )}
    </App>
  );
};
export default withApollo(Home, {
  ssr: false,
});
