import { WrapperHomeProps } from "./WrapperDivide.def";

import classes from "./WrapperDivide.module.scss";

export const WrapperDivide = ({ children }: WrapperHomeProps) => {
  return <div className={classes["wrapper-divide"]}>{children}</div>;
};
