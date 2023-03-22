import { gql } from "@apollo/client";

export const GET_BLEND_TYPES = gql`
  query GetBlendCategories {
    getAllCategories {
      _id
      name
      image
    }
  }
`;

export default GET_BLEND_TYPES;
