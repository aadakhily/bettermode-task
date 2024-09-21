import { useLoaderData } from "react-router-dom";
import { Avatar, Typography, Image, Button } from "@app/ui-kit";

import { apolloClient } from "../../configs/apolloClient";
import { POST_QUERY } from "../../services/graphQL/queries/postQuery";

import { dateFromNow } from "../../utils/date";
import PostReaction from "../../components/PostReaction/PostReaction";

function loader({ params }: { params: { postId: string } }) {
  return apolloClient.query({
    query: POST_QUERY,
    variables: { id: params?.postId },
  });
}

function Post() {
  const pageData = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  const post = pageData.data.post;
  const thumbnail = post.thumbnail;
  const createdPostDate = dateFromNow(post.createdAt);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between bg-base-200 dark:bg-base-200-dark px-3 py-2 rounded-lg shadow border border-base-300 dark:border-base-300-dark">
        <div className="flex items-center gap-3">
          <Avatar
            size="md"
            fallback={post.owner?.member?.name?.[0]}
            src={post.owner?.member?.profilePicture?.url}
          />

          <div className="flex flex-col">
            <Typography className="font-bold">
              {post.owner?.member?.name}
            </Typography>

            <Typography variant={"caption"} className="text-xs">
              {createdPostDate}
            </Typography>
          </div>
        </div>

        <Button size={"sm"}>follow</Button>
      </div>

      <div>
        <div className="bg-base-200 dark:bg-base-200-dark p-4 rounded-lg shadow border border-base-300 dark:border-base-300-dark flex flex-col gap-2">
          {thumbnail && (
            <div className="rounded-xl overflow-hidden">
              <Image
                src={thumbnail.url}
                alt={"post thumbnail"}
                ratio={
                  thumbnail.width && thumbnail.height
                    ? +thumbnail.width / +thumbnail.height
                    : 1
                }
              />
            </div>
          )}

          <div className="flex flex-col pt-3 gap-2">
            <Typography variant={"h4"} className="font-semibold">
              {post.title}
            </Typography>

            <Typography variant={"body"} className="font-light">
              {post.description}
            </Typography>

            <div>
              <PostReaction
                postId={post.id}
                reactionsCount={post.reactionsCount}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Post as Component, loader };
