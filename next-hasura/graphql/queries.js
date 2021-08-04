import gql from 'graphql-tag';

export  const GET_ITEMS_QUERY = gql`
  query getItems {
    items {
      id
      name
      price
      user {
        name
        email
        id
      }
      category {
        id
        name
      }
    }
  }
`;

export const GET_CATEGORIES_QUERY = gql`
    query {
        categories {
            id
            name
    
        }
    }
`;

export const GET_ORDERS_QUERY = gql`
    query {
        orders {
            id
            receipt
            total_price
            amount
            
        }
    }
`;
