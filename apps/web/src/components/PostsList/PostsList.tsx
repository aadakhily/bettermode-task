import { Fragment } from "react/jsx-runtime";
import { Node } from "../../services/graphQL/queries/postsQuery";
import PostItem from "./PostItem";

interface PostsListProps {
  postsData: Node[];
}

function PostsList({ postsData }: PostsListProps) {
  return (
    <div className="flex flex-col gap-4 overflow-y-auto">
      {postsData.map((post) => (
        <Fragment key={post.id}>
          <PostItem post={post} />
        </Fragment>
      ))}
    </div>
  );
}

export default PostsList;
