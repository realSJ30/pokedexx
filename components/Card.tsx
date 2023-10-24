"use client";
import { MainContext } from "@/provider/MainProvider";
import { ViewMode } from "@/utils/enums";
import { Pokemon } from "@/utils/interface";
import Image from "next/image";
import React, { useContext } from "react";

interface CardProps {
  pokemon: Pokemon;
}
const Card: React.FC<CardProps> = ({ pokemon }) => {
  const { viewMode } = useContext(MainContext);
  const { pokemon_v2_pokemon } = pokemon;
  const { pokemon_v2_pokemonstats } = pokemon_v2_pokemon;
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon_v2_pokemon.id}.png`;

  return viewMode === ViewMode.CARD_VIEW ? (
    <div className="flex flex-col justify-center items-center border-2 border-neutral-700 border-solid rounded-xl h-[320px] p-8 border-opacity-70 group hover:border-opacity-100 scale-95 hover:scale-100 shadow-lg transition cursor-pointer">
      <div className="w-32 h-32 relative">
        <Image src={imgUrl} alt={pokemon_v2_pokemon.name} fill />
      </div>
      <p className="text-neutral-500 font-semibold">#{pokemon_v2_pokemon.id}</p>
      <h1 className="font-bold text-lg">{pokemon_v2_pokemon.name}</h1>
      <p className="text-sm font-semibold mt-4">
        {pokemon_v2_pokemon.pokemon_v2_pokemontypes[0].pokemon_v2_type.name}
      </p>
    </div>
  ) : (
    <div className="col-span-12 flex justify-between border-2 border-neutral-700 border-solid rounded-xl h-[320px] p-8 border-opacity-70 group hover:border-opacity-100 scale-95 hover:scale-100 shadow-lg transition cursor-pointer">
      <div className="flex flex-col gap-y-2">
        <div className="w-40 sm:w-52 h-52 relative">
          <Image src={imgUrl} alt={pokemon_v2_pokemon.name} fill />
        </div>
        <h1 className="font-bold text-lg">{pokemon_v2_pokemon.name}</h1>
        <p className="text-sm font-semibold mt-4">
          <span className="text-neutral-400">Type: </span>
          {pokemon_v2_pokemon.pokemon_v2_pokemontypes[0].pokemon_v2_type.name}
        </p>
      </div>
      <div className="flex flex-col gap-2 sm:gap-4 w-1/4">
        <p className="text-neutral-500 font-semibold">
          #{pokemon_v2_pokemon.id}
        </p>
        {pokemon_v2_pokemonstats.map((pokestats, indx) => (
          <div key={indx} className="flex flex-col w-full justify-start">
            <p className="text-xs font-bold uppercase">{pokestats.pokemon_v2_stat.name}</p>
            <div className="flex-start flex h-1.5 w-full bg-neutral-400 overflow-hidden rounded-sm bg-blue-gray-50 font-sans text-xs font-medium">
              <div
                style={{ width: `${pokestats.base_stat}%` }}
                className={`flex h-full items-baseline justify-center overflow-hidden break-all bg-pink-500 text-white w-[${pokestats.base_stat}%]`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
