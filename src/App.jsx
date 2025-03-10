// src/App.jsx
import router from "./Components/Routes";

import { RouterProvider } from "react-router-dom";

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
