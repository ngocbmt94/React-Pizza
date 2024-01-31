import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';
import LinkButton from '../../UI-components/LinkButton';
import { useSelector } from 'react-redux';
import { getUserName } from '../users/userSlice';

function Menu() {
  const menuData = useLoaderData();
  const userName = useSelector(getUserName);

  if (!userName)
    return (
      <LinkButton to="/" arrow={true}>
        Input your name to see menu
      </LinkButton>
    );
  return (
    <ul className="grid-cols mx-auto grid max-w-7xl sm:grid-cols-2 lg:grid-cols-3">
      {menuData.map((pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menuData = await getMenu();
  return menuData;
}

export default Menu;
