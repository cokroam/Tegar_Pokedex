import { ButtonProps } from "./Button.def";
import classes from "./Button.module.scss";

export const Button = ({
  children,
  type = "button",
  onClick = () => undefined,
  backgroundColor = "default",
  iconName,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${classes["button"]} ${
        classes[`button--${backgroundColor}`]
      }`}
      role="button"
      onClick={onClick}
    >
      {iconName && <i className={iconName}></i>}
      {children}
    </button>
  );
};
