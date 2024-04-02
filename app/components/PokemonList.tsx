import { useQuery, gql } from '@apollo/client';

const GET_POKEMONS = gql`
  query GetPokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      id
      name
      type1
      type2
    }
  }
`;

interface Pokemon {
  id: number;
  name: string;
  type1: string;
  type2?: string;
}

interface PokemonsData {
  pokemons: Pokemon[];
}

interface PokemonsVars {
  limit: number;
  offset: number;
}

export default function PokemonList() {
  const { loading, error, data } = useQuery<PokemonsData, PokemonsVars>(
    GET_POKEMONS,
    {
      variables: { limit: 10, offset: 0 },
    }
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data?.pokemons.map((pokemon) => (
        <li key={pokemon.id}>
          {pokemon.name} - {pokemon.type1} {pokemon.type2 ? `/ ${pokemon.type2}` : ''}
        </li>
      ))}
    </ul>
  );
}