import { useQuery } from "@apollo/react-hooks";
import {GET_ITEMS_QUERY} from './queries';



export const useItems = () => {
  const { loading, error, data } = useQuery(GET_ITEMS_QUERY);

  console.log(data.items);

  if (!loading && data) {
    return {
      loading,
      error,
      data: {
        items: data.items,
      },
    };
  }

  return {
    loading,
    error,
    data,
  };
};
