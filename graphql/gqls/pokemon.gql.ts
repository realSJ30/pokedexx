import { gql } from "@apollo/client";
import { ExecGraphQL } from "../client";

export const GET_POKEMON_LIST = gql`
  query GetPokemonList($limit: Int, $offset: Int) {
    pokemons: pokemon_v2_pokemonsprites(limit: $limit, offset: $offset) {
      pokemon_v2_pokemon {
        id
        name
        pokemon_v2_pokemonstats {
          pokemon_v2_stat {
            name
          }
          base_stat
        }
        pokemon_v2_pokemontypes(limit: 1) {
          pokemon_v2_type {
            name
          }
        }
      }
      sprites
    }
    pokemon_count: pokemon_v2_pokemon_aggregate {
      aggregate {
        count
      }
    }
  }
`;

export const getPokemonList = async (limit: number, offset: number) => {
  const data = await ExecGraphQL(GET_POKEMON_LIST, { limit, offset });
  return data;
};
