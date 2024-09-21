import { Link } from "react-router-dom";
import { Button, Typography } from "@app/ui-kit";

import Header from "../../components/layouts/MainLayout/Header";

function NotFound() {
  return (
    <div className="h-screen bg-base-100 dark:bg-base-100-dark">
      <Header />
      <div className="container h-5/6 flex flex-col gap-6 items-center justify-center">
        <Typography variant={"h1"} className="text-8xl lg:text-9xl">
          404
        </Typography>

        <Typography variant={"h2"} className="">
          opppps .... page not found
        </Typography>

        <Button asChild>
          <Link to={"/"}>Go Home</Link>
        </Button>
      </div>
    </div>
  );
}

export { NotFound as Component };
