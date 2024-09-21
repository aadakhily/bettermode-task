import { gql, TypedDocumentNode } from "@apollo/client";

interface PostData {
  post: Node;
}

export interface Node {
  id: string;
  slug: string;
  subscribersCount: string | null;
  reactionsCount: number;
  hasMoreContent: boolean;
  shortContent: string | null;
  createdAt: string;
  title: string;
  description: string;
  thumbnail: Image | null;
  owner: {
    member: Member;
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

interface Member {
  name: string;
  id: string;
  profilePictureId: string;
  username: string;
  profilePicture: Image;
}

interface PostVars {
  id: string;
}

const POST_QUERY: TypedDocumentNode<PostData, PostVars> = gql`
  query GetPost($id: ID!) {
    post(id: $id) {
      id
      slug
      subscribersCount
      reactionsCount
      hasMoreContent
      shortContent
      title
      createdAt
      description
      thumbnail {
        ... on Image {
          id
          url
          width
          height
          urls {
            small
            small
          }
        }
      }
      owner {
        member {
          name
          id
          profilePictureId
          username
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
    }
  }
`;

export { POST_QUERY };
