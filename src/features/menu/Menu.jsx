import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';

function Menu() {
  const menuData = useLoaderData();

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
