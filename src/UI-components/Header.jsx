import { Link } from "react-router-dom";
import SearchOrder from "../features/orders/SearchOrder";

function Header() {
  return (
    <header>
      <Link to="/">LOGO</Link>
      <SearchOrder />
      <p>user: NGOC</p>
    </header>
  );
}

export default Header;
