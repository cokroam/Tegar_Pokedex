import { PokemonDetail } from "./pokemon-detail";
import { PokemonInfo } from "./pokemon-info";
import { PokemonProps } from "./Pokemon.def";
import { SimpleCard } from "../simple-card";
import { capitalizeFirstLetter } from "../../utils";
import classes from "./Pokemon.module.scss";

export const Pokemon = ({ pokemon }: PokemonProps) => {
  return (
    <div className={classes["pokemon"]}>
      <span className={classes["pokemon__number"]}>#{pokemon.id}</span>
      <h2 className={classes["pokemon__name"]}>
        {capitalizeFirstLetter(pokemon.name)}
      </h2>

      <div className={classes["pokemon__wrapper-info"]}>
        <PokemonInfo stats={pokemon.stats} />
        <div className={classes["pokemon__wrapper-img"]}>
          <img
            src={pokemon?.sprites?.other?.dream_world.front_default}
            alt={pokemon.name}
          />
        </div>
      </div>

      <div className={classes["pokemon__wrapper-details"]}>
        <SimpleCard title="Jenis">
          <div className={classes["pokemon__content"]}>
            {pokemon.types.map((item) => {
              return (
                <PokemonDetail
                  key={item.type.name}
                  label={capitalizeFirstLetter(item.type.name)}
                />
              );
            })}
          </div>
        </SimpleCard>

        <SimpleCard title="Tinggi / Berat">
          <div className={classes["pokemon__content"]}>
            <PokemonDetail
              label={
                <>
                  {pokemon.height / 10} <small>m.</small>
                </>
              }
            />

            <PokemonDetail
              label={
                <>
                  {pokemon.weight} <small>kg.</small>
                </>
              }
            />
          </div>
        </SimpleCard>

        <SimpleCard title="Kelebihan">
          <div className={classes["pokemon__content"]}>
            {pokemon.abilities.map((item) => {
              return (
                <PokemonDetail
                  key={item.ability.name}
                  label={capitalizeFirstLetter(item.ability.name)}
                />
              );
            })}
          </div>
        </SimpleCard>
        
      </div>
      
    </div>
    
  );
};
