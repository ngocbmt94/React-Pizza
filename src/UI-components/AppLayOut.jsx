import { Outlet, useNavigation } from 'react-router-dom';
import Header from './Header';
import CartOverview from '../features/carts/CartOverview';
import Loader from './Loader';

function AppLayOut() {
  /*   PENDING NAVIGATION UI: useNavigation() to check the page status: idle || loading || submitting || action.. 
  When users navigate around the app, the data for the next page is loaded before the page is rendered.
  It's important to provide user feedback during this time so the app doesn't feel like it's unresponsive. */

  /* navigation.state
    -  idle - There is no navigation pending.
    -  submitting - A route action is being called due to a form submission using POST, PUT, PATCH, or DELETE
    -  loading - The loaders for the next routes are being called to render the next page */

  const naigation = useNavigation();
  const isLoading = naigation.state === 'loading';

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}

      <Header />
      <main className="overflow-auto px-6 py-8">
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayOut;
