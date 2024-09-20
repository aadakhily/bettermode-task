import { Suspense, useRef, useState } from "react";
import { useLazyQuery, useQuery } from "@apollo/client";
import { useLoaderData, Await } from "react-router-dom";

import { apolloClient } from "../../configs/apolloClient";
import { POSTS_QUERY } from "../../services/graphQL/queries/postsQuery";

import PostsList from "../../components/PostsList/PostsList";

const initialVars = {
  limit: 5,
  offset: 0,
};

async function loader() {
  return apolloClient.query({
    query: POSTS_QUERY,
    variables: initialVars,
  });
}

function Posts() {
  const initialPosts = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  const paginationOptions = useRef(initialVars);

  const [posts, setPosts] = useState(initialPosts.data.posts.nodes ?? []);

  const [fetchPosts, { loading }] = useLazyQuery(POSTS_QUERY, {
    onCompleted(data) {
      setPosts((prevPosts) => [...prevPosts, ...data.posts.nodes]);
    },
  });

  const totalPostsCount = initialPosts?.data?.posts?.totalCount;

  function loadMorePost() {
    const nextPageOptions = {
      limit: paginationOptions.current.limit,
      offset: paginationOptions.current.offset + 5,
    };

    fetchPosts({ variables: nextPageOptions });

    paginationOptions.current = nextPageOptions;
  }

  return (
    <div className="px-1 py-2 flex flex-col md:flex-row">
      <div>
        {/* <Suspense fallback={<h1>this is loading</h1>}>
          <Await
            resolve={initialPosts}
            errorElement={<div>Could not load reviews 😬</div>}
            children={(resolvedReviews) => (
              <PostsList postsData={resolvedReviews.data.posts.nodes} />
              // <Reviews items={resolvedReviews} />
            )}
          />
        </Suspense> */}

        <PostsList postsData={posts} />

        {totalPostsCount !== posts.length && (
          <button onClick={loadMorePost}>load more .....</button>
        )}
      </div>

      <div className="basis-3/5">fdf</div>
    </div>
  );
}

export { Posts as Component, loader };
