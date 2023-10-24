"use client";

import Card from "@/components/Card";
import Loading from "@/components/Loading";
import { getPokemonList } from "@/graphql/gqls/pokemon.gql";
import { MainContext } from "@/provider/MainProvider";
import { PokeData, Pokemon } from "@/utils/interface";
import React, { useContext, useEffect, useState } from "react";

const PokemonList = () => {
  const { offSet, limit, setCount } = useContext(MainContext);
  const [pokemonData, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonList = async () => {
      const data = await getPokemonList(limit, offSet);
      const { pokemons, pokemon_count } = data as PokeData;

      setPokemons(pokemons);
      setLoading(false);
      // either we set this to actual pokemon counts or set to 100 base on the instruction
      // setCount(pokemon_count.aggregate.count);
      setCount(100);
    };
    fetchPokemonList();
  }, [offSet, limit, setCount]);

  //   return   <Loading />;
  return loading ? (
    <Loading />
  ) : (
    <div className="grid grid-cols-1 px-4 sm:px-0 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 h-full w-full overflow-y-auto text-black pb-12">
      {pokemonData.length > 0 ? (
        pokemonData.map((pokemon) => (
          <Card key={pokemon.pokemon_v2_pokemon.id} pokemon={pokemon} />
        ))
      ) : (
        <div>No Pokemons Found.</div>
      )}
    </div>
  );
};

export default PokemonList;
