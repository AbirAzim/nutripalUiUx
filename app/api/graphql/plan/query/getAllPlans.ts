import { gql } from "@apollo/client";

const GET_ALL_PLANS = gql`
  query GetAllGlobalPlans($page: Float, $limit: Float, $memberId: String) {
    getAllGlobalPlans(page: $page, limit: $limit, memberId: $memberId) {
      plans {
        _id
        planName
        description
      }
      totalPlans
    }
  }
`;

export default GET_ALL_PLANS;
