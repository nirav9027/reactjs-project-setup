import Routing from "./routes/Routing";
import './assets/scss/svgStyle.scss';
import './assets/scss/global.scss';
import { Suspense } from "react";
import Loader from "./components/Loader";

function App() {
  return (
    <>
      <Suspense fallback={<Loader/>}>
        <Routing />
      </Suspense>
    </>
  );
}

export default App;
