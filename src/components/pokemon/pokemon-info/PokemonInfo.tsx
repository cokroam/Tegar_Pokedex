import { capitalizeFirstLetter, ColorsType, getColor } from "../../../utils";
import { ProgressBar } from "../../progress-bar";
import { PokemonInfoProps } from "./PokemonInfo.def";
import classes from "./PokemonInfo.module.scss";

export const PokemonInfo = ({ stats, title = "" }: PokemonInfoProps) => {
  return (
    <div className={classes["pokemon-info"]}>
      {title && <h3 className={classes["pokemon-info__title"]}>{title}</h3>}

      <div className={classes["pokemon-info__content"]}>
        {stats.map((item) => {
          return (
            <ProgressBar
              key={item.stat.name}
              value={item.base_stat}
              label={capitalizeFirstLetter(item.stat.name)}
              backgroundLineColor={
                getColor(item.stat.name as keyof ColorsType).backgroundLineColor
              }
              lineColor={getColor(item.stat.name as keyof ColorsType).lineColor}
            />
          );
        })}
      </div>
    </div>
  );
};
