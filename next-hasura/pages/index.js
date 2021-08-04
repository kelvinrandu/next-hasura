import Head from "next/head";
import { useItems } from "../graphql/hooks";
import { withApollo } from "../graphql/apollo";
import Image from "next/image";
import { Text, Flex, Spinner } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";

const Home = () => {
  const { data, loading } = useItems();

  const allItems = data ? data.items : [];
  return (
    <div className={styles.container}>
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
    </div>
  );
};
export default withApollo(Home, {
  ssr: false,
});
