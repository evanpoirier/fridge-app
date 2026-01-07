import './Button.css';

function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'large',
  disabled = false,
  icon = null,
  fullWidth = false,
  className = ''
}) {
  const buttonClass = `
    button
    button--${variant}
    button--${size}
    ${fullWidth ? 'button--full-width' : ''}
    ${className}
  `.trim();

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className="button__icon">{icon}</span>}
      {children}
    </button>
  );
}

export default Button;
