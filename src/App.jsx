import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { store } from './store';
import { Provider } from 'react-redux';

import Home from './pages/Home';
import Menu, { loader as menuLoader } from './features/menu/Menu';
import Cart from './features/carts/Cart';
import CreateOrder, {
  action as createOrderAction,
} from './features/orders/CreateOrder';
import Order, { loader as orderLoader } from './features/orders/Order';
import Error from './UI-components/Error';
import AppLayOut from './UI-components/AppLayOut';
import { action as orderAction } from './features/orders/UpdateOrder';

const router = createBrowserRouter([
  {
    element: <AppLayOut />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: 'menu',
        element: <Menu />,
        errorElement: <Error />,
        loader: menuLoader, // will fetching data at the same time as it start rendering correct Route
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'order/new',
        element: <CreateOrder />,
        action: createOrderAction, //actions are used to write data or to mutate data.
      },
      {
        path: 'order/:orderID',
        element: <Order />,
        errorElement: <Error />,
        loader: orderLoader,
        action: orderAction,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
