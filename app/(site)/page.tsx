import Pagination from "@/components/Pagination";
import PokemonList from "./components/PokemonList";

export default async function Home() {
  return (
    <div className="h-full w-full">
      <PokemonList />
      <Pagination />
    </div>
  );
}
