import LinkButton from '../../UI-components/LinkButton';

function CartOverview() {
  return (
    <div className="flex flex-col bg-slate-800 px-6 py-4 text-slate-100 md:flex-row md:justify-between">
      <p className="space-x-6 font-semibold tracking-widest">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <LinkButton to="/cart" arrow={true} color="white">
        Open cart
      </LinkButton>
    </div>
  );
}

export default CartOverview;
