import "./App.css";
import Login from "./login/Login";
import Signup from "./signup/Signup";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const route = createBrowserRouter([
    {
      path: "/SignUp",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
