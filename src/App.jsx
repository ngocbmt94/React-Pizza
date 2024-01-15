import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Menu from "./features/menu/Menu";
import Cart from "./features/carts/Cart";
import CreateOrder from "./features/orders/CreateOrder";
import Order from "./features/orders/Order";
import NotFound from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "menu",
    element: <Menu />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
  {
    path: "order/new",
    element: <CreateOrder />,
  },
  {
    path: "order/:orderID",
    element: <Order />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
