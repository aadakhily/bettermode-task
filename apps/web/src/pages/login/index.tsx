import type { LoaderFunctionArgs } from "react-router-dom";

// async function loader({ request, params }: LoaderFunctionArgs) {
//   // let data = await fetchData(request);
//   // return json(data);
// }

function Login() {
  // let data = useLoaderData();

  return (
    <>
      <h1>You made it!</h1>
      {/* <p>{data}</p> */}
    </>
  );
}

export { Login as Component };
