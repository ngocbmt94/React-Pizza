import { Link } from 'react-router-dom';

function LinkButton({ children, to, arrow, color }) {
  const base =
    'font-semibold uppercase tracking-widest *:inline-block *:transition-all *:hover:translate-x-1/2';
  const style = {
    defaultColor: `${base} text-teals-500 hover:text-teals-800`,
    white: `${base} text-white`,
  };
  return (
    <Link to={to} className={style[!color ? 'defaultColor' : 'white']}>
      {children}
      {arrow && <span>&#10132;</span>}
    </Link>
  );
}

export default LinkButton;
