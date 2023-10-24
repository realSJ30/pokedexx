"use client";

import { BounceLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="h-full p-40 w-full flex flex-col items-center justify-center">
      <h1 className="text-neutral-500 font-semibold">Loading Pokemons</h1>
      <BounceLoader color="#FDF70D" size={40} />
    </div>
  );
};

export default Loading;
