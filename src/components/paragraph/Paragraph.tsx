import { ParagraphProps } from "./Paragraph.def";

import classes from "./Paragraph.module.scss";

export const Paragraph = ({ text, style = {} }: ParagraphProps) => {
  return (
    <p className={classes["paragraph"]} style={style}>
      {text}
    </p>
  );
};
