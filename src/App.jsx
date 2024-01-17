import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/carts/Cart";
import CreateOrder, { action as createOrderAction } from "./features/orders/CreateOrder";
import Order, { loader as orderLoader } from "./features/orders/Order";
import Error from "./UI-components/Error";

import AppLayOut from "./UI-components/AppLayOut";

const router = createBrowserRouter([
  {
    element: <AppLayOut />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "menu",
        element: <Menu />,
        errorElement: <Error />,
        loader: menuLoader, // will fetching data at the same time as it start rendering correct Route
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "order/:orderID",
        element: <Order />,
        errorElement: <Error />,
        loader: orderLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
