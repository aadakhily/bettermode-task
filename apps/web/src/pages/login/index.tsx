import { useQuery } from "@apollo/client";
import { POSTS_QUERY } from "../../services/graphQL/queries/postsQuery";

function Login() {
  const { data } = useQuery(POSTS_QUERY, {
    variables: {
      limit: 3,
      postTypeIds: ["eiW8qDBBISwWKc8"],
      orderByString: "publishedAt",
      reverse: false,
      filterBy: [],
    },
  });

  console.log("data :>> ", data);

  return (
    <>
      <h1>You made it!</h1>
    </>
  );
}

export { Login as Component };
