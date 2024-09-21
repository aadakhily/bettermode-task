import { Link } from "react-router-dom";
import { Avatar, Typography, Image } from "@app/ui-kit";

import { dateFromNow } from "../../utils/date";

import { Node } from "../../services/graphQL/queries/postsQuery";
import PostReaction from "../PostReaction/PostReaction";

interface PostItemProps {
  post: Node;
}

function PostItem({ post }: PostItemProps) {
  const createdPostDate = dateFromNow(post.createdAt);

  const thumbnail = post.thumbnail;

  return (
    <Link
      to={`post/${post.id}`}
      className="bg-base-200 dark:bg-base-200-dark p-4 rounded-lg shadow border border-base-300 dark:border-base-300-dark flex flex-col gap-2"
    >
      <div className="flex items-center gap-3">
        <Avatar
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
          <PostReaction postId={post.id} reactionsCount={post.reactionsCount} />
        </div>
      </div>
    </Link>
  );
}

export default PostItem;
