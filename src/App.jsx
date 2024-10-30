import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Error from "./pages/ErrorPage";
import AppLayout from "./pages/AppLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        // {
        //   path: "/login",
        //   index: true,
        //   element: <Login />,
        // },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
