import { gql } from "@apollo/client";

const GET_WIKI_HIGHLIGHTS = gql`
  query GetWikiHighlights {
    getWikiList {
      _id
      wikiTitle
      type
      image
    }
  }
`;
export default GET_WIKI_HIGHLIGHTS;
