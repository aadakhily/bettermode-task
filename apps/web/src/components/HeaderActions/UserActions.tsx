import {
  Avatar,
  Typography,
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@app/ui-kit";

import { useQuery } from "@apollo/client";
import { AUTH_MEMBER_QUERY } from "../../services/graphQL/queries/authMemberQuery";

function UserActions() {
  const { data } = useQuery(AUTH_MEMBER_QUERY);

  const userData = data?.authMember;
  const profilePic = userData?.profilePicture?.url;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Avatar fallback={userData?.name[0]} src={profilePic} size="sm" />
        </TooltipTrigger>

        <TooltipContent side={"bottom"} className="bg-base-100">
          <div className="flex items-center gap-2">
            <Avatar fallback={userData?.name[0]} src={profilePic} size="sm" />

            <div className="flex flex-col p-1">
              <Typography variant={"caption"} className="font-bold">
                {userData?.name}
              </Typography>
              <Typography variant={"caption"}>{userData?.email}</Typography>
            </div>
          </div>

          <TooltipArrow className="fill-neutral" />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default UserActions;
