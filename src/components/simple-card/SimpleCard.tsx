import { SimpleCardProps } from "./SimpleCard.def";
import classes from "./SimpleCard.module.scss";

export const SimpleCard = ({ children, title }: SimpleCardProps) => {
  return (
    <div className={classes["simple-card"]}>
      <h3 className={classes["simple-card__title"]}>{title}</h3>
      {children}
    </div>
  );
};
