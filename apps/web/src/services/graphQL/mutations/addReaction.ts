import { gql, TypedDocumentNode } from "@apollo/client";

interface addReactionData {
  addReaction: {
    status: string;
  };
}

interface addReactionVars {
  postId: string;
  input: {
    reaction: "heart";
    overrideSingleChoiceReactions: true;
  };
}

const ADD_REACTION_MUTATION: TypedDocumentNode<
  addReactionData,
  addReactionVars
> = gql`
  mutation addReaction($input: AddReactionInput!, $postId: ID!) {
    addReaction(input: $input, postId: $postId) {
      status
    }
  }
`;

export { ADD_REACTION_MUTATION };
