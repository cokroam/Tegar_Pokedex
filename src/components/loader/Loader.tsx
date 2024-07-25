import pokeballLoader from "../../assets/images/pokeball-loader.gif";
import classes from "./Loader.module.scss";

export const Loader = () => {
  return (
    <div className={classes["loader"]}>
      <img src={pokeballLoader} alt="" />
    </div>
  );
};
