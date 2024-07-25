import { ProgressBarProps } from "./ProgressBar.def";
import classes from "./ProgressBar.module.scss";

export const ProgressBar = ({
  label,
  value,
  backgroundLineColor = "",
  lineColor = "",
}: ProgressBarProps) => {
  return (
    <div className={classes["progress-bar"]}>
      <span className={classes["progress-bar__title"]}>{label}</span>
      <div
        className={classes["progress-bar__progress"]}
        style={{
          backgroundColor: backgroundLineColor,
        }}
      >
        <span
          className={classes["progress-bar__line"]}
          style={{ width: `${value * 3}px`, backgroundColor: lineColor }}
        >
          <span className={classes["progress-bar__tooltip"]}>{value}</span>
        </span>
      </div>
    </div>
  );
};
