export interface Pokemonv2stat {
  name: string;
}
export interface Pokemonv2pokemonstat {
  pokemon_v2_stat: Pokemonv2stat;
  base_stat: number;
}
export interface Pokemonv2pokemontype {
  pokemon_v2_type: Pokemonv2stat;
}
export interface Pokemonv2pokemon {
  id: number;
  name: string;
  pokemon_v2_pokemonstats: Pokemonv2pokemonstat[];
  pokemon_v2_pokemontypes: Pokemonv2pokemontype[];
}
export interface Pokemon {
  pokemon_v2_pokemon: Pokemonv2pokemon;
}
export interface Aggregate {
  count: number;
}
export interface Pokemoncount {
  aggregate: Aggregate;
}
export interface PokeData {
  pokemons: Pokemon[];
  pokemon_count: Pokemoncount;
}