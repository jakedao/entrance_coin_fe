import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import { CointDetail } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => <div>ROOT LOADER</div>,
    children: [
      {
        path: ":coin",
        element: <CointDetail />,
        loader: () => <div>LOADING ...</div>,
      },
    ],
  },
]);

export default router;
