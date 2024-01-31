import { useDispatch } from 'react-redux';
import Button from '../../UI-components/Button';
import { deleteItem } from './cartSlice';

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  function handleDeleteCart() {
    dispatch(deleteItem(pizzaId));
  }

  return (
    <Button size="small" color="secondary" onClick={handleDeleteCart}>
      Delete
    </Button>
  );
}

export default DeleteItem;
