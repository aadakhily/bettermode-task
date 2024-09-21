import { Suspense, useRef, useState } from "react";
import { Button, Typography } from "@app/ui-kit";

import { useLazyQuery } from "@apollo/client";
import { useLoaderData, Await } from "react-router-dom";

import { apolloClient } from "../../configs/apolloClient";
import { POSTS_QUERY } from "../../services/graphQL/queries/postsQuery";

import PostsList from "../../components/PostsList/PostsList";
import { LoaderCircle } from "lucide-react";

const initialVars = {
  limit: 5,
  offset: 0,
};

function loader() {
  return apolloClient.query({
    query: POSTS_QUERY,
    variables: initialVars,
  });
}

function Posts() {
  const paginationOptions = useRef(initialVars);
  const initialPosts = useLoaderData() as Awaited<ReturnType<typeof loader>>;
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

        <div className="w-full py-4 flex items-center justify-center">
          {totalPostsCount !== posts.length && (
            <Button onClick={loadMorePost} disabled={loading}>
              {loading ? (
                <div className="flex items-center gap-4">
                  <span>loading ...</span>

                  <LoaderCircle className="animate-spin" />
                </div>
              ) : (
                <span>load more ...</span>
              )}
            </Button>
          )}
        </div>
      </div>

      <div className="basis-3/5 px-2">
        <div className="py-3 px-4 bg-base-200 dark:bg-base-200-dark rounded-md">
          <Typography variant={"h4"} className="font-bold mb-2">
            Welcome
          </Typography>
          <Typography>
            Get ready to dive into a world of innovation, exploration, and
            collaboration.
          </Typography>
        </div>
      </div>
    </div>
  );
}

export { Posts as Component, loader };
