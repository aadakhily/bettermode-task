import { gql, TypedDocumentNode } from "@apollo/client";

interface authMemberData {
  authMember: {
    id: string;
    name: string;
    email: string;
    username: string;
    profilePictureId: string;
    profilePicture: Image | null;
  };
}

interface Image {
  id: string;
  url: string;
  width: string | null;
  height: string | null;
  urls: {
    small: string;
    thumb: string;
  };
}
interface authMemberVars {
  limit: number;
  offset: number;
}

const AUTH_MEMBER_QUERY: TypedDocumentNode<authMemberData, authMemberVars> =
  gql`
    query GetCurrentUser {
      authMember {
        name
        id
        profilePictureId
        username
        email
        profilePicture {
          ... on Image {
            id
            url
            urls {
              small
              thumb
            }
          }
        }
      }
    }
  `;

export { AUTH_MEMBER_QUERY };
