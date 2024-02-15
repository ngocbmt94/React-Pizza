import LinkButton from '../../UI-components/LinkButton';

function EmptyCart() {
  return (
    <div>
      <LinkButton to="/menu" arrow={true}>
        Back to menu
      </LinkButton>

      <p>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
