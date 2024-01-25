const base = 'group relative overflow-hidden rounded-lg bg-white shadow-lg ';
const style = {
  normal: `${base} h-12 w-48 text-lg`,
  small: `${base} h-8 w-28 text-xs`,
  color: {
    default: 'bg-teals-800',
    secondary: 'bg-slate-500/40',
  },
};

function Button({ children, disabled, onClick, size, color }) {
  const isNewColor = color !== 'default' && color !== undefined;
  return (
    <button
      onClick={onClick}
      className={style[size]}
      disabled={disabled ? disabled : false}
    >
      <div
        className={`absolute inset-0 w-3 ${isNewColor ? style.color[color] : style.color.default} transition-all duration-[250ms] ease-out group-hover:w-full`}
      ></div>
      <span
        className={`relative font-semibold uppercase text-black group-hover:text-white`}
      >
        {children}
      </span>
    </button>
  );
}

export default Button;
