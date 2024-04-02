import { Link } from '@remix-run/react';
import PokemonList from '~/components/PokemonList';

export default function Index() {
  return (
    <div>
      <h1>Pokedex</h1>
      <PokemonList />
      <Link to="/pokemon/1">View Pokemon 1</Link>
    </div>
  );
}