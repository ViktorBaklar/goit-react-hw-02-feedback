import style from './Button.module.css';

const Button = ({
  className,
  children,
  type = 'button',
  onClick,
}) => {
  const classList = [style.button, className].join(' ');

  return (
    <button
      className={classList}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;