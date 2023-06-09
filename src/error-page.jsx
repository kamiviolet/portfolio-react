import { useRouteError } from "react-router-dom";
import Background from "./components/Background";


export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
    <Background />
    <main>
      <div id="error-page">
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>{error.statusText || error.message}</p>
      </div>
    </main>
    </>
  );
}
