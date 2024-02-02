import {
  increaseQuantityItem,
  decreaseQuantityItem,
  getCurrentQuantityById,
} from './cartSlice';
import Button from '../../UI-components/Button';
import { useDispatch, useSelector } from 'react-redux';

function UpdateItemQuantity({ pizzaId }) {
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

  function handleIncrease() {
    dispatch(increaseQuantityItem(pizzaId));
  }

  function handleDecrease() {
    dispatch(decreaseQuantityItem(pizzaId));
  }
  return (
    <div>
      <Button typeSpecial={true} onClick={handleDecrease}>
        -
      </Button>
      {currentQuantity}
      <Button typeSpecial={true} onClick={handleIncrease}>
        +
      </Button>
    </div>
  );
}
export default UpdateItemQuantity;
