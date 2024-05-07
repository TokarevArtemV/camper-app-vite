import s from './Button.module.css';

const Button = ({
  type = 'button',
  title,
  children,
  className = '',
  onClick,
  isDisabled,
  ...rest
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${s.button} ${className ? s[className] : ''}`}
      disabled={isDisabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
