import css from "./Button.module.css";

const Button = ({ onClick, children, className, type = "button" }) => {
  return (
    <button onClick={onClick} className={`${css.btn} ${className}`} type={type}>
      {children}
    </button>
  );
};

export default Button;
