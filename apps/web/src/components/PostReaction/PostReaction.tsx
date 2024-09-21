import { MouseEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_REACTION_MUTATION } from "../../services/graphQL/mutations/addReaction";

import { Heart, LoaderCircle } from "lucide-react";
import { REMOVE_REACTION_MUTATION } from "../../services/graphQL/mutations/removeReaction";

interface PostReactionProps {
  postId: string;
  reactionsCount: number;
}

function PostReaction({ postId, reactionsCount }: PostReactionProps) {
  const [reactionData, setReactionData] = useState({
    isReacted: false,
    reactionsCount,
  });

  const [mutateAddReaction, { loading: addReactionLoading }] = useMutation(
    ADD_REACTION_MUTATION,
    {
      onCompleted(data) {
        const status = data.addReaction.status;

        if (status === "succeeded") {
          setReactionData((prevData) => ({
            isReacted: true,
            reactionsCount: prevData.reactionsCount + 1,
          }));
        }
      },
    }
  );

  const [mutateRemoveReaction, { loading: removeReactionLoading }] =
    useMutation(REMOVE_REACTION_MUTATION, {
      onCompleted(data) {
        const status = data.removeReaction.status;

        if (status === "succeeded") {
          setReactionData((prevData) => ({
            isReacted: false,
            reactionsCount: prevData.reactionsCount - 1,
          }));
        }
      },
    });

  function handleReact(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    if (reactionData.isReacted) {
      mutateRemoveReaction({
        variables: {
          postId,
          reaction: "heart",
        },
      });
    } else {
      mutateAddReaction({
        variables: {
          postId,
          input: { reaction: "heart", overrideSingleChoiceReactions: true },
        },
      });
    }
  }

  return (
    <button
      onClick={handleReact}
      className={`py-[2px] px-2 flex items-center gap-2 text-base-content dark:text-base-content-dark border rounded-3xl ${reactionData.isReacted ? "bg-[#FF5861] !text-base-100" : ""} `}
    >
      <span>
        {addReactionLoading || removeReactionLoading ? (
          <LoaderCircle size={18} className="animate-spin" />
        ) : (
          <Heart size={18} />
        )}
      </span>
      <span>{reactionData.reactionsCount}</span>
    </button>
  );
}

export default PostReaction;
