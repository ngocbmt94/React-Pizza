import { Link } from 'react-router-dom';
import SearchOrder from '../features/orders/SearchOrder';

function Header() {
  return (
    <header className="flex items-center justify-between bg-header px-6 py-4 text-teals-100 shadow-md">
      <Link to="/">FAST PIZZA CO.</Link>
      <SearchOrder />
      <div className="flex items-center">
        <img
          className="mx-5 h-10 w-10 rounded-full border-2 border-white"
          alt="user"
          src="../../public/user.png"
        />
        <span className="font-semibold capitalize tracking-widest text-white">
          Ngoc
        </span>
      </div>
    </header>
  );
}

export default Header;
