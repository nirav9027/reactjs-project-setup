import Routing from "./routes/Routing";
import './assets/scss/svgStyle.scss';
import './assets/scss/global.scss';
import { Suspense } from "react";

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
