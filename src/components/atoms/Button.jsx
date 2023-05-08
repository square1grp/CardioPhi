
const Button = ({ text, onClick, style }) => (
  <button onClick={onClick} className="bg-main hover:bg-main-700 focus:shadow-outline active:shadow-lg text-sm text-white py-1 px-3 rounded-none" style={style}>
    {text}
  </button>
);

export default Button;
