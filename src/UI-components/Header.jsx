import { Link } from 'react-router-dom';

import SearchOrder from '../features/orders/SearchOrder';
import UserName from '../features/users/UserName';
function Header() {
  return (
    <header className="flex items-center justify-between bg-header px-6 py-4 text-teals-100 shadow-md">
      <Link to="/">FAST PIZZA CO.</Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}

export default Header;
