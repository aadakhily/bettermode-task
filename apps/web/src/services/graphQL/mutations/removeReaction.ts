import { gql, TypedDocumentNode } from "@apollo/client";

interface removeReactionData {
  removeReaction: {
    status: string;
  };
}

interface removeReactionVars {
  postId: string;
  reaction: "heart";
}

const REMOVE_REACTION_MUTATION: TypedDocumentNode<
  removeReactionData,
  removeReactionVars
> = gql`
  mutation removeReaction($reaction: String!, $postId: ID!) {
    removeReaction(reaction: $reaction, postId: $postId) {
      status
    }
  }
`;

export { REMOVE_REACTION_MUTATION };
